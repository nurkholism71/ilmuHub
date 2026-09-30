import React from 'react';
import { RefreshCw, Home, AlertCircle } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("IlmHub Caught Error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    try {
      localStorage.removeItem('ilmhub_user');
    } catch (e) {}
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0A1822] text-white flex flex-col items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full bg-[#11222E] border border-white/10 rounded-3xl p-8 text-center space-y-5 shadow-2xl animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/30">
              <AlertCircle className="w-8 h-8" />
            </div>
            
            <div className="space-y-1">
              <h1 className="text-xl font-black text-white">Terjadi Kendala Tampilan</h1>
              <p className="text-xs text-gray-400">
                Sistem mendeteksi kesalahan rendering. Silakan muat ulang halaman atau kembali ke Beranda.
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Muat Ulang Halaman</span>
              </button>

              <button
                onClick={this.handleReset}
                className="w-full bg-white/10 hover:bg-white/15 text-gray-300 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Reset Sesi & Kembali ke Beranda</span>
              </button>
            </div>

            {this.state.error && (
              <div className="text-left bg-black/40 p-3 rounded-xl text-[10px] font-mono text-rose-300 overflow-x-auto max-h-32 no-scrollbar">
                {this.state.error.toString()}
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
