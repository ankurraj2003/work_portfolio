export interface Achievement {
  title: string
  description: string
  year: string
  iconType: 'award' | 'star' | 'cert' | 'work'
}

export const achievements: Achievement[] = [
  {
    title: 'Academic Publication',
    description: 'Authored a research paper “Deep Unfolded Hybrid Beamforming for NOMA- Enabled Joint Sensing and Communication” accepted for presentation at IEEE WCNC 2026, Malaysia.',
    year: '2026',
    iconType: 'award',
  },
  {
    title: 'Hackathon Success',
    description: ' Runner-up in the competitive Google Website Design Competition conducted by Google Developer Groups.',
    year: '2024',
    iconType: 'cert',
  },
  {
    title: 'Position of Responsiblity',
    description: 'Served as Marketing core member for IIIT Sri City and conducted several NSS drives',
    year: '2024',
    iconType: 'star',
  },
]
