const ScrollingText = () => {
  return (
    <div className="w-full overflow-hidden bg-orange-500 py-2 relative">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* first set */}
        <div className="flex items-center space-x-32 px-24">
          <span className="text-white/90 font-medium text-sm">
            Özel İndirimler
          </span>
          <span className="text-white font-medium text-sm">Hızlı Teslimat</span>
          <span className="text-white/90 font-medium text-sm">
            Premium Kalite
          </span>
          <span className="text-white font-medium text-sm">Ücretsiz Kargo</span>
          <span className="text-white/90 font-medium text-sm">
            Müşteri Memnuniyeti
          </span>
        </div>

        {/* second set (aynı içerik) */}
        <div className="flex items-center space-x-32 px-24">
          <span className="text-white/90 font-medium text-sm">
            Özel İndirimler
          </span>
          <span className="text-white font-medium text-sm">Hızlı Teslimat</span>
          <span className="text-white/90 font-medium text-sm">
            Premium Kalite
          </span>
          <span className="text-white font-medium text-sm">Ücretsiz Kargo</span>
          <span className="text-white/90 font-medium text-sm">
            Müşteri Memnuniyeti
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default ScrollingText
