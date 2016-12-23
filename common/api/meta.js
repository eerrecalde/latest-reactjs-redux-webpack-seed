export default {
  title: {
    titles: {
      '/courses': 'Starter kit | Courses',
      '/course/': 'Starter kit | Course',
      '/about': 'Starter kit | About',
      '/home': 'Starter kit | Home'
    },
    get(l) {
      let title

      if (l.indexOf('/course/') > -1) {
        return this.titles['/course/']
      }

      return (this.titles[l]) ? this.titles[l] : this.titles['/home']
    }
  }
}
