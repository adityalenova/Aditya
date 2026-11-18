import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  Download,
  ExternalLink,
  FileText,
  Loader2,
  Printer,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { PROFILE_LINKS, RESUME_SUMMARY } from '../data/portfolioData';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

interface ResumePdfPageProps {
  onBack: () => void;
}

interface PdfCanvasPageProps {
  pdfDoc: pdfjsLib.PDFDocumentProxy;
  pageNumber: number;
  scale: number;
}

function PdfCanvasPage({ pdfDoc, pageNumber, scale }: PdfCanvasPageProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    let renderTask: pdfjsLib.RenderTask | null = null;

    async function renderPage() {
      const page = await pdfDoc.getPage(pageNumber);
      if (cancelled) return;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const outputScale = Math.min(window.devicePixelRatio || 1, 2.5);
      const viewport = page.getViewport({ scale });

      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined;

      renderTask = page.render({
        canvas,
        canvasContext: ctx,
        viewport,
        transform,
      });

      try {
        await renderTask.promise;
      } catch (err) {
        if ((err as { name?: string })?.name !== 'RenderingCancelledException') {
          console.error('PDF page render error:', err);
        }
      }
    }

    void renderPage();

    return () => {
      cancelled = true;
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [pdfDoc, pageNumber, scale]);

  return (
    <div className="bg-white rounded-sm shadow-[0_18px_50px_rgba(0,0,0,0.5)] overflow-hidden max-w-full">
      <canvas
        ref={canvasRef}
        className="block max-w-full !h-auto"
        aria-label={`Resume PDF page ${pageNumber}`}
      />
    </div>
  );
}

export function ResumePdfPage({ onBack }: ResumePdfPageProps) {
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [scale, setScale] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 640 ? 1.0 : 1.35
  );
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onBack();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onBack]);

  useEffect(() => {
    let active = true;
    let objectUrl: string | null = null;
    let loadingTask: pdfjsLib.PDFDocumentLoadingTask | null = null;

    async function loadPdf() {
      setLoading(true);
      setLoadError(null);
      try {
        const res = await fetch(PROFILE_LINKS.resumePdfUrl, {
          credentials: 'same-origin',
        });
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const buffer = await res.arrayBuffer();
        if (!active) return;

        const blob = new Blob([buffer], { type: 'application/pdf' });
        objectUrl = URL.createObjectURL(blob);
        setBlobUrl(objectUrl);

        loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(buffer) });
        const loadedDoc = await loadingTask.promise;
        if (!active) {
          void loadingTask.destroy();
          return;
        }
        setPdfDoc(loadedDoc);
        setNumPages(loadedDoc.numPages);
      } catch (err) {
        if (active) {
          console.error('Failed to load resume PDF:', err);
          setLoadError('Unable to load the PDF preview right now.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadPdf();

    return () => {
      active = false;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
      if (loadingTask) {
        void loadingTask.destroy();
      }
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#160F0C] text-[#FBF9F6] flex flex-col">
      {/* Top Sticky PDF Reader Bar */}
      <header className="sticky top-0 z-40 bg-[#1E1612]/95 backdrop-blur-xl border-b border-[#382A24]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#291E1A] hover:bg-[#382A24] border border-[#382A24] text-xs sm:text-sm font-medium text-[#FBF9F6] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <ArrowLeft className="w-4 h-4 text-[#E59569]" aria-hidden="true" />
              <span>Back to portfolio</span>
            </button>

            <div className="hidden md:flex items-center gap-2 min-w-0 text-xs text-[#A08C83]">
              <FileText className="w-4 h-4 text-[#E59569] shrink-0" aria-hidden="true" />
              <span className="font-medium text-[#FBF9F6] truncate">Aditya_Duggirala_Resume.pdf</span>
              {numPages > 0 && (
                <span className="text-[#A08C83] font-mono tabular-nums shrink-0">
                  · {numPages} {numPages === 1 ? 'page' : 'pages'}
                </span>
              )}
            </div>
          </div>

          {/* Center Zoom Controls */}
          <div className="hidden sm:flex items-center gap-1 p-1 rounded-full bg-[#291E1A] border border-[#382A24]">
            <button
              type="button"
              onClick={() => setScale((s) => Math.max(0.7, Number((s - 0.15).toFixed(2))))}
              aria-label="Zoom out"
              className="w-8 h-8 rounded-full hover:bg-[#382A24] flex items-center justify-center text-[#FBF9F6] transition-colors cursor-pointer"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="px-2 text-xs font-mono tabular-nums text-[#FBF9F6] min-w-[52px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              onClick={() => setScale((s) => Math.min(2.2, Number((s + 0.15).toFixed(2))))}
              aria-label="Zoom in"
              className="w-8 h-8 rounded-full hover:bg-[#382A24] flex items-center justify-center text-[#FBF9F6] transition-colors cursor-pointer"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          {/* Right Actions: Print, Open Blob, Download */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrint}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#291E1A] hover:bg-[#382A24] border border-[#382A24] text-xs font-medium text-[#FBF9F6] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Print</span>
            </button>

            {blobUrl && (
              <>
                <a
                  href={blobUrl}
                  target="_blank"
                  rel="noopener"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#291E1A] hover:bg-[#382A24] border border-[#382A24] text-xs font-medium text-[#FBF9F6] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Open Raw PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>

                <a
                  href={blobUrl}
                  download="Aditya_Duggirala_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E59569] hover:bg-[#F0A780] text-[#160F0C] text-xs sm:text-sm font-semibold transition-colors shadow-[0_6px_20px_rgba(229,149,105,0.3)] whitespace-nowrap shrink-0"
                >
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Download PDF</span>
                </a>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main PDF Pages Viewport */}
      <main className="flex-1 py-6 sm:py-10 px-3 sm:px-6 flex flex-col items-center gap-6 sm:gap-8 overflow-x-auto">
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-3 text-[#A08C83]">
            <Loader2 className="w-7 h-7 animate-spin text-[#E59569]" aria-hidden="true" />
            <span className="text-sm font-medium">Loading Aditya_Duggirala_Resume.pdf...</span>
          </div>
        )}

        {!loading && loadError && (
          <div className="max-w-xl w-full rounded-2xl bg-[#FAF8F5] text-[#2B1B15] p-8 space-y-4 shadow-2xl border border-[#E6DFD5]">
            <h1 className="font-display text-xl font-bold">{PROFILE_LINKS.name} — Resume</h1>
            <p className="text-sm text-[#5A4D46]">{RESUME_SUMMARY.profile}</p>
            <p className="text-xs text-[#C67848]">{loadError}</p>
            <a
              href={PROFILE_LINKS.resumePdfUrl}
              download="Aditya_Duggirala_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C67848] text-white text-xs font-semibold"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        )}

        {!loading && !loadError && pdfDoc && (
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            {Array.from({ length: numPages }, (_, i) => i + 1).map((pageNumber) => (
              <div key={pageNumber} className="flex flex-col items-center gap-2">
                <PdfCanvasPage pdfDoc={pdfDoc} pageNumber={pageNumber} scale={scale} />
                <span className="text-[11px] font-mono text-[#A08C83] tabular-nums">
                  Page {pageNumber} of {numPages}
                </span>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
