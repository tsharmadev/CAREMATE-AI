import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("CancerCare Grid UI Caught an Error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 text-slate-800 font-sans">
          <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center">
            <span className="text-5xl block mb-4">🎗️⚠️</span>
            <h1 className="text-xl font-bold text-slate-900 mb-2">
              Application Error Encountered
            </h1>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              An unexpected rendering error occurred. Please review the diagnostic detail below or refresh the page.
            </p>
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-left mb-6 overflow-x-auto">
              <p className="text-xs font-mono font-bold text-rose-700 mb-1">
                {this.state.error?.toString()}
              </p>
              {this.state.errorInfo?.componentStack && (
                <pre className="text-[11px] font-mono text-rose-600 whitespace-pre-wrap max-h-48 overflow-y-auto">
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </div>
            <div className="flex justify-center space-x-3">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-md"
              >
                Reload Application
              </button>
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null, errorInfo: null });
                  window.location.hash = '';
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
              >
                Reset State
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
