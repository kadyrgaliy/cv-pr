'use client'

import { Megaphone, PenTool, UserCheck, MapPin, DollarSign, ArrowRight } from 'lucide-react'
import { careersData } from '@/lib/portfolio-data'

const iconMap = {
  Megaphone,
  PenTool,
  UserCheck,
}

interface CareersSectionProps {
  data?: typeof careersData
}

export function CareersSection({ data = careersData }: CareersSectionProps) {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Вакансиялар</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{data.intro}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {data.positions.map((position, index) => {
          const IconComponent = iconMap[position.icon as keyof typeof iconMap]
          return (
            <div
              key={index}
              className="group bg-secondary rounded-xl md:rounded-2xl border border-border overflow-hidden hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 flex flex-col"
            >
              {/* Card header */}
              <div className="p-5 md:p-6 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-b border-border flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors">
                  {IconComponent && <IconComponent className="w-6 h-6 text-accent" strokeWidth={1.5} />}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-foreground leading-tight group-hover:text-accent transition-colors">
                    {position.title}
                  </h3>
                  {position.subtitle && (
                    <p className="text-xs font-light text-muted-foreground mt-0.5">{position.subtitle}</p>
                  )}
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                    <span className="text-xs text-muted-foreground truncate">{position.type}</span>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-4 md:p-5 flex flex-col flex-1">
                {/* Salary */}
                <div className="flex items-center gap-1.5 mb-3">
                  <DollarSign className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-accent">{position.salary}</span>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {position.description}
                </p>

                {/* Requirements tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {position.requirements.map((req, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 bg-background rounded-md text-muted-foreground border border-border"
                    >
                      {req}
                    </span>
                  ))}
                </div>

                {/* Apply button */}
                <a
                  href={`mailto:hello@nexusai.io?subject=Өтінім: ${position.title}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-accent text-accent-foreground rounded-xl text-sm font-medium hover:shadow-md hover:shadow-accent/20 hover:-translate-y-0.5 transition-all"
                >
                  Өтінім беру
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
