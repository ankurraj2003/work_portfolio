export interface Education {
  institution: string
  degree: string
  dateRange: string
  logo: string
}

export const education: Education[] = [
  {
    institution: 'Indian Institute of Information Technology, Sri City',
    degree: 'Bachelor of Technology',
    dateRange: '2022 — 2026',
    logo: '/iiit.png',
  },
  {
    institution: 'DAV Public School Hehal, Ranchi',
    degree: 'Intermediate',
    dateRange: '2019 — 2021',
    logo: '/dav.jpg',
  },
  {
    institution: 'Lady K.C. Roy Memorial School, Ranchi',
    degree: 'Matriculation',
    dateRange: '2017 - 2019',
    logo: '/ladykc.jpg',
  },
]
