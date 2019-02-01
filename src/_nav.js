export default {
  items: [
    {
      name: 'Accueil',
      url: '/home',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      name: 'Curiculum Vitaes',
      icon: 'fa fa-id-card-o',
      url: '/cv'
    },
    {
      title: true,
      name: 'Mes projets',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Work In Progress',
      icon: 'fa fa-cog fa-spin',
      url: '/wip'
    },  
    /*
    {
      name: 'Site web',
      url: '/projets/sw',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Mondulkiri',
          url: '/projet/sw/mondulkiri',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Applications mobile',
      url: '/projets/app',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/standard-buttons',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Jeux web',
      url: '/projets/gw',
      icon: 'icon-pie-chart',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell'
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell'
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell'
        }
      ]
    },
    {
      name: 'Jeux mobile',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell'
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell'
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell'
        }
      ]
    },  
    */
    {
      name: 'Contactez-moi',
      url: '/contact',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'primary'
    },
    {
      name: 'Faire un devis',
      url: '/devis',
      icon: 'icon-layers',
      variant: 'warning'
    },
    {
      name: 'Mes clients',
      url: '/devis',
      icon: 'icon-layers',
      variant: 'success'
    },
    {
      name: 'Le LAB',
      url: '/lab',
      icon: 'icon-layers',
      variant: 'danger'
    },
    {
      divider: true
    },  
  ]
}
