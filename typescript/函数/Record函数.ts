interface PageInfo {
  title: string
}

type Page = 'home' | 'about' | 'contact'
const x: Record<Page, PageInfo> = {
  home: {title: "123"},
  about: {title: '456'},
  contact: {title: '789'}
}
