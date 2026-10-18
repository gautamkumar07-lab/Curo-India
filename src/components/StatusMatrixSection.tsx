import React, { useState } from 'react';
import { PerspectiveTiltCard } from './PerspectiveTiltCard';
import { ArrowUpRight } from 'lucide-react';

interface StatusMatrixSectionProps {
  onSelectProject: (projectId: string) => void;
}

export const StatusMatrixSection: React.FC<StatusMatrixSectionProps> = ({
  onSelectProject,
}) => {
  const [activeSector, setActiveSector] = useState<'commercial' | 'residential'>('commercial');

  const commercialData = {
    ongoing: [
      {
        id: 'curo-one',
        name: 'Curo One',
        location: 'New Chandigarh',
        image: '/images/commercial/ongoing/subthumb1.jpg',
      },
      {
        id: 'curo-high-street',
        name: 'Curo Highstreet',
        location: 'Jalandhar',
        image: '/images/commercial/ongoing/subthumb2.jpg',
      },
    ],
    upcoming: [
      {
        id: 'curo-tech',
        name: 'Curo Tech',
        location: 'Gurgaon',
        image: '/images/commercial/upcoming/subthumb.jpg',
      },
    ],
    completed: [
      {
        id: 'curo-square',
        name: 'Curo Square',
        location: 'Ludhiana',
        image: '/images/commercial/compleated/subthumb.jpg',
      },
    ],
  };

  const residentialData = {
    ongoing: [
      {
        id: 'curo-one',
        name: 'Curo One',
        location: 'New Chandigarh',
        image: '/images/residence/ongoing/subthumb.jpg',
      },
    ],
    upcoming: [
      {
        id: 'curo-queensridge',
        name: 'Curo Queensridge',
        location: 'Delhi',
        image: '/images/residence/upcoming/subthumb.jpg',
      },
    ],
    completed: [
      {
        id: 'curo-homes-barnala',
        name: 'Curo Homes',
        location: 'Barnala',
        image: '/images/residence/compleated/subthumb.jpg',
      },
    ],
  };

  const currentData = activeSector === 'commercial' ? commercialData : residentialData;

  return (
    <section className="py-16 bg-[#32363D] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sector Switcher (Commercial vs Residential) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-white/15">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6CA85]">
              Project Status Portfolio:
            </span>
            <div className="inline-flex rounded-lg bg-black/40 p-1 border border-white/10">
              <button
                onClick={() => setActiveSector('commercial')}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  activeSector === 'commercial'
                    ? 'bg-[#FFB700] text-[#1E232B] shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Commercial
              </button>
              <button
                onClick={() => setActiveSector('residential')}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  activeSector === 'residential'
                    ? 'bg-[#FFB700] text-[#1E232B] shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Residential
              </button>
            </div>
          </div>

          <div className="text-xs text-slate-300 font-mono hidden md:block">
            Showing all {activeSector.toUpperCase()} developments by construction milestone
          </div>
        </div>

        {/* 3 Status Columns Matrix (ONGOING | UPCOMING | COMPLETED) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* COLUMN 1: ONGOING */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex justify-center md:justify-start">
              <div className="border border-[#FFB700] px-8 py-2 text-white font-mono tracking-widest text-sm sm:text-base font-bold uppercase bg-black/20 text-center">
                ONGOING
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {currentData.ongoing.map((item) => (
                <PerspectiveTiltCard
                  key={item.id}
                  maxTilt={10}
                  glareEffect={true}
                  onClick={() => onSelectProject(item.id)}
                  className="w-full"
                >
                  <div className="group cursor-pointer space-y-2">
                    {/* Yellow label pill */}
                    <div>
                      <span className="bg-[#FFB700] text-[#1E232B] font-bold text-xs px-2.5 py-1 inline-block uppercase shadow-sm">
                        {item.name}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="text-white text-sm font-medium">
                      {item.location}
                    </div>

                    {/* Original Thumbnail Image with 3D Depth */}
                    <div className="relative h-44 w-full overflow-hidden bg-black/40 border border-white/20 shadow-xl group-hover:border-[#FFB700] transition-colors">
                      <img
                        src={item.image}
                        alt={`${item.name} ${item.location}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                  </div>
                </PerspectiveTiltCard>
              ))}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block md:col-span-1 self-stretch border-r border-white/20 my-2" />

          {/* COLUMN 2: UPCOMING */}
          <div className="md:col-span-3 space-y-6">
            <div className="flex justify-center md:justify-start">
              <div className="border border-[#FFB700] px-8 py-2 text-white font-mono tracking-widest text-sm sm:text-base font-bold uppercase bg-black/20 text-center">
                UPCOMING
              </div>
            </div>

            <div className="space-y-6 pt-2">
              {currentData.upcoming.map((item) => (
                <PerspectiveTiltCard
                  key={item.id}
                  maxTilt={10}
                  glareEffect={true}
                  onClick={() => onSelectProject(item.id)}
                  className="w-full"
                >
                  <div className="group cursor-pointer space-y-2">
                    {/* Yellow label pill */}
                    <div>
                      <span className="bg-[#FFB700] text-[#1E232B] font-bold text-xs px-2.5 py-1 inline-block uppercase shadow-sm">
                        {item.name}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="text-white text-sm font-medium">
                      {item.location}
                    </div>

                    {/* Original Thumbnail Image */}
                    <div className="relative h-44 w-full overflow-hidden bg-black/40 border border-white/20 shadow-xl group-hover:border-[#FFB700] transition-colors">
                      <img
                        src={item.image}
                        alt={`${item.name} ${item.location}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                  </div>
                </PerspectiveTiltCard>
              ))}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block md:col-span-1 self-stretch border-r border-white/20 my-2" />

          {/* COLUMN 3: COMPLETED */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex justify-center md:justify-start">
              <div className="border border-[#FFB700] px-8 py-2 text-white font-mono tracking-widest text-sm sm:text-base font-bold uppercase bg-black/20 text-center">
                COMPLETED
              </div>
            </div>

            <div className="space-y-6 pt-2">
              {currentData.completed.map((item) => (
                <PerspectiveTiltCard
                  key={item.id}
                  maxTilt={10}
                  glareEffect={true}
                  onClick={() => onSelectProject(item.id)}
                  className="w-full"
                >
                  <div className="group cursor-pointer space-y-2">
                    {/* Yellow label pill */}
                    <div>
                      <span className="bg-[#FFB700] text-[#1E232B] font-bold text-xs px-2.5 py-1 inline-block uppercase shadow-sm">
                        {item.name}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="text-white text-sm font-medium">
                      {item.location}
                    </div>

                    {/* Original Thumbnail Image */}
                    <div className="relative h-44 w-full overflow-hidden bg-black/40 border border-white/20 shadow-xl group-hover:border-[#FFB700] transition-colors">
                      <img
                        src={item.image}
                        alt={`${item.name} ${item.location}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                  </div>
                </PerspectiveTiltCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
