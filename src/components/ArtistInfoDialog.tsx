
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ArtistProps {
  isOpen: boolean;
  onClose: () => void;
  artist: {
    name: string;
    image: string;
    bio: string;
  };
}

const ArtistInfoDialog: React.FC<ArtistProps> = ({ isOpen, onClose, artist }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) onClose();
    }}>
      <DialogContent className="bg-festival-yellow p-4 sm:p-6 max-w-5xl border-none">
        <DialogTitle className="sr-only">{artist.name}</DialogTitle>
        <div className="flex flex-col gap-6">
          <div className="flex gap-6 flex-col md:flex-row">
            <img 
              src={artist.image} 
              alt={artist.name}
              className="w-full md:w-[440px] h-[247px] border-[3px] border-[#181717] object-cover" 
            />
            <div className="flex-1 font-boldonse text-sm md:text-base text-black" 
                 dangerouslySetInnerHTML={{ __html: artist.bio.replace(/<span style='text-decoration: underline;'>/g, '<span>') }}>
            </div>
          </div>
          
          <div className="flex gap-7 items-center flex-wrap">
            <div className="bg-[#181717] px-3 py-2 text-festival-yellow font-boldonse text-2xl cursor-pointer hover:opacity-90 transition-opacity">
              BUY TICKETS
            </div>
            <div className="font-boldonse text-2xl text-black cursor-pointer hover:opacity-90 transition-opacity">
              BANDCAMP
            </div>
            <div className="font-boldonse text-2xl text-black cursor-pointer hover:opacity-90 transition-opacity">
              OFFICIAL WEBSITE
            </div>
          </div>
          
          <DialogClose asChild>
            <div className="font-boldonse text-2xl text-black cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2" onClick={onClose}>
              CLOSE <X size={24} />
            </div>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArtistInfoDialog;
