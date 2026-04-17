'use client'

import { useState } from 'react'
import { Bot, BarChart3, Layers, Settings2, Globe, GraduationCap } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

const iconMap = {
  Bot,
  BarChart3,
  Layers,
  Settings2,
  Globe,
  GraduationCap,
}

interface PortfolioSectionProps {
  data?: typeof portfolioData
}

export function PortfolioSection({ data = portfolioData }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState('барлығы')

  const filteredProjects =
    activeFilter === 'барлығы' ? data.projects : data.projects.filter((p) => p.category === activeFilter)

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Портфолио</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {data.categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-medium capitalize transition-all ${
              activeFilter === category
                ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredProjects.map((project, index) => {
          const IconComponent = iconMap[project.icon as keyof typeof iconMap]
          return (
            <div
              key={index}
              className="group bg-secondary rounded-xl md:rounded-2xl border border-border overflow-hidden hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 flex flex-col"
            >
              {/* Card header */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent flex items-center justify-center border-b border-border">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  {IconComponent && <IconComponent className="w-8 h-8 text-accent" strokeWidth={1.5} />}
                </div>
              </div>

              {/* Card body */}
              <div className="p-4 md:p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-base font-semibold text-foreground leading-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-0.5 bg-background rounded-md text-accent border border-border flex-shrink-0 capitalize">
                    {project.category}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
