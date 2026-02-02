import React from 'react';
import { FileText } from 'lucide-react';
import Card from '../components/Card';
import DownloadButton from '../components/DownloadButton';

const ResourceCard = ({ 
  icon: Icon = FileText, 
  title, 
  description, 
  fileSize, 
  fileName
}) => {
  return (
    <Card className="h-full flex flex-col p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-start justify-between mb-4">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-xl">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded-full border border-primary/10 whitespace-nowrap">
          PDF • {fileSize}
        </span>
      </div>
      
      <h3 className="font-heading text-xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
        {title}
      </h3>
      
      <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
        {description}
      </p>
      
      <div className="mt-auto">
        <DownloadButton 
          title={title}
          fileName={fileName}
          fileSize={fileSize}
          description={description}
          variant="outline"
        />
      </div>
    </Card>
  );
};

export default ResourceCard;