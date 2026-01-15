
import React, { useEffect, useRef, useState } from 'react';

interface AIImageProps {
  prompt: string;
  alt: string;
  className?: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
}

// Global cache to prevent re-generating the same image in the same session
const imageCache: Record<string, string> = {};

const AIImage: React.FC<AIImageProps> = ({ prompt, alt, className = "", aspectRatio = "16:9" }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(imageCache[prompt] || null);
  const [loading, setLoading] = useState(!imageCache[prompt]);
  const [error, setError] = useState(false);
  const isGenerating = useRef(false);

  useEffect(() => {
    if (imageUrl || isGenerating.current) return;

    const generateImage = async () => {
      isGenerating.current = true;
      try {
        // Mock image generation using Unsplash source for static deployment
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay

        const keywords = prompt.split(' ').slice(0, 3).join(',');
        const url = `https://source.unsplash.com/1600x900/?landscape,garden,${keywords}`;

        setImageUrl(url);
        imageCache[prompt] = url;

      } catch (err) {
        console.error("Image loading failed:", err);
        setError(true);
      } finally {
        setLoading(false);
        isGenerating.current = false;
      }
    };

    generateImage();
  }, [prompt, imageUrl, aspectRatio]);

  if (loading) {
    return (
      <div className={`bg-stone-200 animate-pulse flex items-center justify-center overflow-hidden ${className}`}>
        <div className="text-stone-400 flex flex-col items-center">
          <i className="fas fa-leaf fa-spin text-3xl mb-2"></i>
          <span className="text-xs font-bold uppercase tracking-widest">Designing...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-stone-300 flex items-center justify-center overflow-hidden ${className}`}>
        <div className="text-stone-500 text-center p-4">
          <i className="fas fa-exclamation-triangle text-2xl mb-2"></i>
          <p className="text-xs">Failed to load landscape visual</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={imageUrl || ""}
      alt={alt}
      className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'} ${className}`}
    />
  );
};

export default AIImage;
