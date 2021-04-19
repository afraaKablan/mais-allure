
// level 1 - normal right menu item
// level 2 - dropdown menu item
// level 3 - normal left menu item

export const RightListItems = [
  {
    title: '',
    icon: 'fa fa-home fa-fw',
    url: '/',
    cItem: 'nav-item menuli',
    cLink: 'nav-links',
    level: '1'
  },
  {
    title: '  מי אנחנו  ',
    icon: '',
    url: '/about',
    cItem: 'nav-item menuli',
    cLink: 'nav-links',
    level: '1'

  },
  {
    title: '  הפינוקים שלנו  ',
    icon: '',
    url: '#',
    cItem: 'nav-item dropdown menuli',
    cLink: 'nav-links dropdown-toggle',
    level: '2',
    drop_items: [" עיסוי רפואי", "נרות הופי", "עיצוב צמות"," אופנה","פדיקור רפואי","עיצוב גבות","ציפורניים", "איפור", "הרמת ריסים" ]
  },
  {
    title: '  גלרית תמונות  ',
    icon: '',
    url: '#',
    cItem: 'nav-item menuli',
    cLink: 'nav-links',
    level: '1'
  },
  {
    title: '  צור קשר  ',
    icon: '',
    url: '/contactUs',
    cItem: 'nav-item menuli',
    cLink: 'nav-links',
    level: '1'
  }
]

export const LeftListItems = [
  {
    title: '  הרשמה  ',
    icon: '',
    url: '#',
    cItem: 'nav-item menuli',
    cLink: 'nav-links',
    level: '1'
  },
  {
    title: '  התחברות  ',
    icon: 'fas fa-sign-in-alt',
    url: '/signUp',
    cItem: 'nav-item menuli',
    cLink: 'nav-links',
    level: '1'
  }
]
