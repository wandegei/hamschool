import React, { useState } from 'react';
import { Download, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { handleFileDownload } from '../lib/downloadUtils';
import { cn } from '../lib/utils';
import { useToast } from '../components/ui/use-toast';

const DownloadButton = ({ 
  fileName, 
  title, 
  description,
  fileSize,
  className,
  variant = "default"
}) => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const { toast } = useToast();

  const handleClick = async (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent bubbling if inside a clickable card
    
    if (status === 'loading') return;

    setStatus('loading');
    
    try {
      const success = await handleFileDownload(fileName, title, description);
      
      if (success) {
        setStatus('success');
        toast({
          title: "Download Complete! 🚀",
          description: `${title} has been saved to your device.`,
          className: "bg-green-50 border-green-200 text-green-800"
        });
        
        // Reset status after a delay so user can download again if needed
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Download failed');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      toast({
        title: "Download Failed",
        description: "There was a problem generating your file. Please try again.",
        variant: "destructive"
      });
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={status === 'loading'}
      className={cn(
        "group relative w-full transition-all duration-300 overflow-hidden",
        variant === "default" 
          ? "bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5" 
          : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white",
        status === 'success' && "bg-green-600 hover:bg-green-700 border-green-600 text-white",
        status === 'error' && "bg-red-600 hover:bg-red-700 border-red-600 text-white",
        className
      )}
    >
      <div className="flex items-center justify-center gap-2">
        {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === 'success' && <CheckCircle className="h-4 w-4 animate-scale-in" />}
        {status === 'error' && <AlertCircle className="h-4 w-4" />}
        {status === 'idle' && <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />}
        
        <span>
          {status === 'loading' && "Generating PDF..."}
          {status === 'success' && "Downloaded!"}
          {status === 'error' && "Retry Download"}
          {status === 'idle' && `Download ${fileSize ? `(${fileSize})` : ''}`}
        </span>
      </div>
    </Button>
  );
};

export default DownloadButton;