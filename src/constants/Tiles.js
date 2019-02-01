      const tilesInit = [
        {
          name: 'earth',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'forest',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'forest2',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 4,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'forest3',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 4,
            SE : 1,
            S  : 1,
            SW : 4,
            NW : 1
          }
        },
        {
          name: 'forest4',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 4,
            NW : 1
          }
        },
        {
          name: 'forest5',
          src: '1-1-1-1-1-1',
          type: {
            N  : 4,
            NE : 4,
            SE : 4,
            S  : 4,
            SW : 4,
            NW : 4
          }
        },
        {
          name: 'forest6',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 4,
            SE : 4,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'forest7',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 4,
            SE : 4,
            S  : 1,
            SW : 1,
            NW : 4
          }
        },
        {
          name: 'forest8',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 4,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 4
          }
        },
        {
          name: 'forest9',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 4,
            SE : 1,
            S  : 1,
            SW : 4,
            NW : 4
          }
        },
        {
          name: 'forest10',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 4,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'forest11',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 4,
            S  : 1,
            SW : 4,
            NW : 1
          }
        },
        {
          name: 'forest12',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 4,
            S  : 4,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'forest13',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 1,
            S  : 4,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'forestRiviere',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 4,
            SE : 1,
            S  : 2,
            SW : 4,
            NW : 1
          }
        },
        {
          name: 'forestRiviere2',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 4,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'forestRiviere3',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 4
          }
        },
        {
          name: 'forestRiviere4',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 4,
            SE : 2,
            S  : 1,
            SW : 2,
            NW : 4
          }
        },
        {
          name: 'forestRiviere5',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 2,
            SE : 4,
            S  : 1,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'forestRiviere6',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 1,
            SE : 2,
            S  : 4,
            SW : 4,
            NW : 4
          }
        },
        {
          name: 'forestRiviere7',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 2,
            SE : 2,
            S  : 4,
            SW : 4,
            NW : 4
          }
        },
        {
          name: 'forestRiviere8',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 2,
            S  : 4,
            SW : 4,
            NW : 4
          }
        },
        {
          name: 'forestRiviere9',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 2,
            SE : 1,
            S  : 4,
            SW : 4,
            NW : 4
          }
        },
        {
          name: 'forestRiviere10',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 2,
            SE : 1,
            S  : 4,
            SW : 4,
            NW : 4
          }
        },
        {
          name: 'forestRiviere11',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 1,
            SE : 1,
            S  : 4,
            SW : 4,
            NW : 4
          }
        },
        {
          name: 'forestRiviere12',
          src: '1-1-1-1-1-1',
          type: {
            N  : 4,
            NE : 2,
            SE : 1,
            S  : 1,
            SW : 4,
            NW : 4
          }
        },
        {
          name: 'forestRiviere13',
          src: '1-1-1-1-1-1',
          type: {
            N  : 4,
            NE : 1,
            SE : 2,
            S  : 1,
            SW : 4,
            NW : 4
          }
        },
        {
          name: 'forestRiviere14',
          src: '1-1-1-1-1-1',
          type: {
            N  : 4,
            NE : 2,
            SE : 2,
            S  : 1,
            SW : 4,
            NW : 4
          }
        },
        {
          name: 'forestRiviere15',
          src: '1-1-1-1-1-1',
          type: {
            N  : 4,
            NE : 2,
            SE : 1,
            S  : 2,
            SW : 4,
            NW : 4
          }
        },
        {
          name: 'forestRiviere16',
          src: '1-1-1-1-1-1',
          type: {
            N  : 4,
            NE : 1,
            SE : 2,
            S  : 2,
            SW : 4,
            NW : 4
          }
        },
        {
          name: 'forestRiviere17',
          src: '1-1-1-1-1-1',
          type: {
            N  : 4,
            NE : 1,
            SE : 1,
            S  : 2,
            SW : 4,
            NW : 4
          }
        },
        {
          name: 'forestRiviere18',
          src: '1-1-1-1-1-1',
          type: {
            N  : 4,
            NE : 2,
            SE : 2,
            S  : 2,
            SW : 4,
            NW : 4
          }
        },
        {
          name: 'forestChamp',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 4,
            S  : 1,
            SW : 5,
            NW : 4
          }
        },
        {
          name: 'forestChamp2',
          src: '1-1-1-1-1-1',
          type: {
            N  : 5,
            NE : 5,
            SE : 4,
            S  : 5,
            SW : 5,
            NW : 4
          }
        },
        {
          name: 'forestChamp3',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 5,
            SE : 4,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'forestChamp4',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 1,
            S  : 5,
            SW : 1,
            NW : 4
          }
        },
        {
          name: 'forestChampMontagne',
          src: '1-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 5,
            SE : 4,
            S  : 1,
            SW : 3,
            NW : 1
          }
        },
        {
          name: 'forestChampMontagne2',
          src: '1-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 5,
            SE : 4,
            S  : 1,
            SW : 3,
            NW : 3
          }
        },
        {
          name: 'forestChampMontagne3',
          src: '1-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 5,
            SE : 4,
            S  : 3,
            SW : 1,
            NW : 3
          }
        },
        {
          name: 'forestChampMontagne4',
          src: '1-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 4,
            SE : 1,
            S  : 3,
            SW : 5,
            NW : 4
          }
        },
        {
          name: 'forestChampMontagne5',
          src: '1-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 4,
            SE : 5,
            S  : 3,
            SW : 5,
            NW : 4
          }
        },
        {
          name: 'champsRiviereMontagneForest',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 4,
            SE : 1,
            S  : 3,
            SW : 5,
            NW : 1
          }
        },
        {
          name: 'champsRiviereMontagneForest2',
          src: '1-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 5,
            SE : 1,
            S  : 1,
            SW : 2,
            NW : 4
          }
        },
        {
          name: 'champsRiviereMontagneForest3',
          src: '1-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 5,
            SE : 4,
            S  : 3,
            SW : 1,
            NW : 2
          }
        },
        {
          name: 'champsRiviereMontagneForest4',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 2,
            SE : 3,
            S  : 3,
            SW : 5,
            NW : 4
          }
        },
        {
          name: 'champsRiviereMontagneForest5',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 2,
            SE : 3,
            S  : 3,
            SW : 5,
            NW : 4
          }
        },
        {
          name: 'champsRiviereMontagneForest6',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 1,
            SE : 3,
            S  : 3,
            SW : 5,
            NW : 4
          }
        },
        {
          name: 'champsRiviereMontagneForest7',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 5,
            SE : 3,
            S  : 3,
            SW : 5,
            NW : 4
          }
        },
        {
          name: 'champsRiviereMontagneForest8',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 5,
            SE : 2,
            S  : 3,
            SW : 5,
            NW : 4
          }
        },
        {
          name: 'champsRiviereMontagneForest9',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 3,
            SE : 2,
            S  : 3,
            SW : 5,
            NW : 4
          }
        },
        {
          name: 'champsRiviereMontagneForest10',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 5,
            SE : 3,
            S  : 3,
            SW : 3,
            NW : 4
          }
        },
        {
          name: 'champsRiviereMontagneForest11',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 5,
            SE : 2,
            S  : 3,
            SW : 3,
            NW : 4
          }
        },
        {
          name: 'montagne',
          src: '1-1-1-3-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 1,
            S  : 3,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagne2',
          src: '1-1-1-3-1-1',
          type: {
            N  : 3,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagne3',
          src: '1-1-1-3-1-1',
          type: {
            N  : 3,
            NE : 3,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagne4',
          src: '1-1-1-3-1-1',
          type: {
            N  : 3,
            NE : 1,
            SE : 3,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagne5',
          src: '1-1-1-3-1-1',
          type: {
            N  : 1,
            NE : 3,
            SE : 1,
            S  : 3,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagne6',
          src: '1-1-1-3-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 1,
            S  : 3,
            SW : 3,
            NW : 1
          }
        },
        {
          name: 'montagne7',
          src: '1-1-1-3-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 3,
            S  : 3,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagne8',
          src: '1-1-1-3-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 1,
            S  : 3,
            SW : 1,
            NW : 3
          }
        },
        {
          name: 'montagne9',
          src: '1-1-1-3-1-1',
          type: {
            N  : 3,
            NE : 1,
            SE : 1,
            S  : 3,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagneForest',
          src: '1-1-1-3-1-1',
          type: {
            N  : 3,
            NE : 3,
            SE : 4,
            S  : 1,
            SW : 1,
            NW : 4
          }
        }, 
        {
          name: 'montagneForest2',
          src: '1-1-1-3-1-1',
          type: {
            N  : 3,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 4
          }
        }, 
        {
          name: 'montagneForest3',
          src: '1-1-1-3-1-1',
          type: {
            N  : 3,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 4,
            NW : 1
          }
        },  
        {
          name: 'montagneForest4',
          src: '1-1-1-3-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 3,
            S  : 3,
            SW : 1,
            NW : 4
          }
        },  
        {
          name: 'montagneForest5',
          src: '1-1-1-3-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 4,
            S  : 3,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagneForest6',
          src: '1-1-1-3-1-1',
          type: {
            N  : 1,
            NE : 4,
            SE : 1,
            S  : 1,
            SW : 3,
            NW : 4
          }
        },   
        {
          name: 'montagneForest7',
          src: '1-1-1-3-1-1',
          type: {
            N  : 4,
            NE : 4,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 3
          }
        },        
        {
          name: 'champsRiviere',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 5,
            SE : 1,
            S  : 2,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'champsRiviere2',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 1,
            S  : 2,
            SW : 5,
            NW : 1
          }
        },
        {
          name: 'champsRiviere3',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 5,
            SE : 1,
            S  : 2,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'champsRiviere4',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 5,
            NW : 1
          }
        },
        {
          name: 'champsRiviere5',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 5,
            SE : 2,
            S  : 2,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'champsRiviere6',
          src: '1-1-1-1-1-1',
          type: {
            N  : 5,
            NE : 1,
            SE : 2,
            S  : 2,
            SW : 5,
            NW : 1
          }
        },
        {
          name: 'champsRiviere7',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 2,
            SE : 2,
            S  : 5,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'champsRiviere8',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 2,
            SE : 1,
            S  : 5,
            SW : 1,
            NW : 2
          }
        },
        {
          name: 'champsRiviere9',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 2,
            S  : 5,
            SW : 1,
            NW : 2
          }
        },
        {
          name: 'champsRiviere10',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 5,
            SE : 2,
            S  : 1,
            SW : 5,
            NW : 2
          }
        },
        {
          name: 'champsRiviere11',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 5,
            SE : 1,
            S  : 2,
            SW : 5,
            NW : 2
          }
        },
        {
          name: 'champsRiviere12',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 5,
            SE : 1,
            S  : 2,
            SW : 5,
            NW : 1
          }
        },
        {
          name: 'champsRiviere13',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 5,
            SE : 2,
            S  : 1,
            SW : 5,
            NW : 1
          }
        },
        {
          name: 'champsRiviere14',
          src: '1-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 5,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 2
          }
        },
        {
          name: 'champsRiviere15',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 5,
            SE : 2,
            S  : 1,
            SW : 1,
            NW : 2
          }
        },
        {
          name: 'champsRiviere16',
          src: '1-1-1-1-1-1',
          type: {
            N  : 5,
            NE : 5,
            SE : 2,
            S  : 5,
            SW : 1,
            NW : 2
          }
        },
        {
          name: 'champsRiviere17',
          src: '1-1-1-1-1-1',
          type: {
            N  : 5,
            NE : 5,
            SE : 2,
            S  : 5,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'champsRiviere18',
          src: '1-1-1-1-1-1',
          type: {
            N  : 5,
            NE : 2,
            SE : 2,
            S  : 5,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'champs',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'champs1',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 5,
            SE : 1,
            S  : 1,
            SW : 5,
            NW : 1
          }
        },
        {
          name: 'champs2',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 5,
            NW : 1
          }
        },
        {
          name: 'champs3',
          src: '1-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 5,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'champs4',
          src: '1-1-1-1-1-1',
          type: {
            N  : 5,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagneRiviereChamp',
          src: '3-1-1-2-1-1',
          type: {
            N  : 1,
            NE : 5,
            SE : 1,
            S  : 3,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'montagneRiviereChamp2',
          src: '3-1-1-2-1-1',
          type: {
            N  : 3,
            NE : 5,
            SE : 1,
            S  : 2,
            SW : 5,
            NW : 1
          }
        },
        {
          name: 'montagneRiviereChamp3',
          src: '3-1-1-2-1-1',
          type: {
            N  : 3,
            NE : 5,
            SE : 1,
            S  : 3,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'montagneRiviereChamp4',
          src: '3-1-1-2-1-1',
          type: {
            N  : 3,
            NE : 5,
            SE : 2,
            S  : 3,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'montagneRiviereChamp5',
          src: '3-1-1-2-1-1',
          type: {
            N  : 3,
            NE : 5,
            SE : 2,
            S  : 3,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagneRiviereChamp6',
          src: '3-1-1-2-1-1',
          type: {
            N  : 3,
            NE : 5,
            SE : 2,
            S  : 3,
            SW : 1,
            NW : 2
          }
        },
        {
          name: 'montagneRiviereChamp7',
          src: '3-1-1-2-1-1',
          type: {
            N  : 3,
            NE : 5,
            SE : 2,
            S  : 3,
            SW : 2,
            NW : 2
          }
        },
        {
          name: 'montagneRiviereChamp8',
          src: '3-1-1-2-1-1',
          type: {
            N  : 3,
            NE : 5,
            SE : 1,
            S  : 3,
            SW : 2,
            NW : 2
          }
        },
        {
          name: 'montagneRiviereChamp9',
          src: '3-1-1-2-1-1',
          type: {
            N  : 3,
            NE : 5,
            SE : 1,
            S  : 3,
            SW : 1,
            NW : 2
          }
        },
        {
          name: 'montagneRiviereChamp10',
          src: '3-1-1-2-1-1',
          type: {
            N  : 3,
            NE : 5,
            SE : 1,
            S  : 3,
            SW : 3,
            NW : 2
          }
        },
        {
          name: 'montagneRiviereChamp11',
          src: '3-1-1-2-1-1',
          type: {
            N  : 3,
            NE : 5,
            SE : 2,
            S  : 3,
            SW : 3,
            NW : 2
          }
        },
        {
          name: 'montagneRiviere',
          src: '3-1-1-2-1-1',
          type: {
            N  : 3,
            NE : 1,
            SE : 1,
            S  : 2,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagneRiviere2',
          src: '3-2-1-2-1-1',
          type: {
            N  : 3,
            NE : 2,
            SE : 1,
            S  : 2,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagneRiviere3',
          src: '3-2-1-2-1-1',
          type: {
            N  : 2,
            NE : 2,
            SE : 1,
            S  : 3,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagneRiviere4',
          src: '3-2-1-2-1-1',
          type: {
            N  : 2,
            NE : 1,
            SE : 1,
            S  : 3,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagneRiviere5',
          src: '3-2-1-2-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 2,
            NW : 3
          }
        },
        {
          name: 'montagneRiviere6',
          src: '3-2-1-2-1-1',
          type: {
            N  : 3,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 2,
            NW : 2
          }
        },
        {
          name: 'montagneRiviere7',
          src: '3-2-1-2-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 3,
            S  : 2,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagneRiviere8',
          src: '3-2-1-2-1-1',
          type: {
            N  : 3,
            NE : 1,
            SE : 2,
            S  : 3,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagneRiviere9',
          src: '3-2-1-2-1-1',
          type: {
            N  : 2,
            NE : 1,
            SE : 1,
            S  : 3,
            SW : 2,
            NW : 2
          }
        },
        {
          name: 'montagneRiviere10',
          src: '3-2-1-2-1-1',
          type: {
            N  : 2,
            NE : 2,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 3
          }
        },
        {
          name: 'riviere',
          src: '2-1-1-2-1-1',
          type: {
            N  : 2,
            NE : 1,
            SE : 1,
            S  : 2,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'riviere2',
          src: '2-1-1-1-2-1',
          type: {
            N  : 2,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'riviere3',
          src: '1-2-1-1-2-1',
          type: {
            N  : 1,
            NE : 2,
            SE : 1,
            S  : 1,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'riviere4',
          src: '1-2-1-1-1-1',
          type: {
            N  : 1,
            NE : 2,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'riviere5',
          src: '1-2-1-1-1-1',
          type: {
            N  : 2,
            NE : 2,
            SE : 1,
            S  : 2,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'riviere6',
          src: '1-2-1-1-1-1',
          type: {
            N  : 1,
            NE : 2,
            SE : 1,
            S  : 2,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'riviere7',
          src: '1-1-1-2-2-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 1,
            S  : 2,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'riviere8',
          src: '1-1-1-2-2-1',
          type: {
            N  : 2,
            NE : 2,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'riviere9',
          src: '1-1-1-2-2-1',
          type: {
            N  : 2,
            NE : 2,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 2
          }
        },
        {
          name: 'riviere10',
          src: '1-1-1-2-2-1',
          type: {
            N  : 2,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 2
          }
        },
        {
          name: 'riviere11',
          src: '1-1-1-2-2-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 2,
            S  : 1,
            SW : 1,
            NW : 2
          }
        },
        {
          name: 'riviere12',
          src: '1-1-1-2-2-1',
          type: {
            N  : 1,
            NE : 2,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 2
          }
        },
        {
          name: 'riviere13',
          src: '1-1-1-2-2-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 1,
            S  : 2,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'riviere14',
          src: '1-1-1-2-2-1',
          type: {
            N  : 2,
            NE : 2,
            SE : 2,
            S  : 2,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'riviere15',
          src: '1-1-1-2-2-1',
          type: {
            N  : 1,
            NE : 2,
            SE : 2,
            S  : 1,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'riviere16',
          src: '1-1-1-2-2-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 2,
            NW : 2
          }
        },
        {
          name: 'lake',
          src: '2-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagneForestRiviere',
          src: '2-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 1,
            SE : 3,
            S  : 3,
            SW : 2,
            NW : 4
          }
        },
        {
          name: 'montagneForestRiviere2',
          src: '2-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 2,
            SE : 4,
            S  : 1,
            SW : 1,
            NW : 3
          }
        },
        {
          name: 'montagneForestRiviere3',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 2,
            SE : 4,
            S  : 2,
            SW : 1,
            NW : 3
          }
        },
        {
          name: 'montagneForestRiviere4',
          src: '2-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 2,
            SE : 4,
            S  : 3,
            SW : 2,
            NW : 3
          }
        },
        {
          name: 'montagneForestRiviere5',
          src: '2-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 3,
            SE : 4,
            S  : 3,
            SW : 2,
            NW : 2
          }
        },
        {
          name: 'montagneForestRiviere6',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 1,
            SE : 2,
            S  : 1,
            SW : 2,
            NW : 4
          }
        },
        {
          name: 'montagneForestRiviere7',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 2,
            SE : 1,
            S  : 1,
            SW : 1,
            NW : 4
          }
        },
        {
          name: 'montagneForestRiviere8',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 1,
            SE : 4,
            S  : 1,
            SW : 4,
            NW : 2
          }
        },
        {
          name: 'montagneForestRiviere9',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 2,
            SE : 4,
            S  : 1,
            SW : 4,
            NW : 2
          }
        },
        {
          name: 'montagneForestRiviere10',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 2,
            SE : 4,
            S  : 2,
            SW : 4,
            NW : 2
          }
        },
        {
          name: 'montagneForestRiviere11',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 1,
            SE : 4,
            S  : 2,
            SW : 4,
            NW : 2
          }
        },
        {
          name: 'montagneForestRiviere12',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 2,
            SE : 4,
            S  : 2,
            SW : 4,
            NW : 1
          }
        },
        {
          name: 'montagneForestRiviere13',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 1,
            SE : 4,
            S  : 2,
            SW : 4,
            NW : 1
          }
        },
        {
          name: 'montagneForestRiviere14',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 2,
            SE : 4,
            S  : 1,
            SW : 4,
            NW : 1
          }
        },
        {
          name: 'montagneForestRiviere15',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 2,
            SE : 4,
            S  : 4,
            SW : 4,
            NW : 1
          }
        },
        {
          name: 'montagneForestRiviere16',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 2,
            SE : 4,
            S  : 4,
            SW : 4,
            NW : 3
          }
        },
        {
          name: 'montagneForestRiviere17',
          src: '2-1-1-1-1-1',
          type: {
            N  : 2,
            NE : 2,
            SE : 4,
            S  : 4,
            SW : 4,
            NW : 3
          }
        },
        {
          name: 'montagneForestRiviere18',
          src: '2-1-1-1-1-1',
          type: {
            N  : 4,
            NE : 1,
            SE : 1,
            S  : 3,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'montagneForestRiviere19',
          src: '2-1-1-1-1-1',
          type: {
            N  : 4,
            NE : 3,
            SE : 1,
            S  : 3,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'montagneForestRiviere20',
          src: '2-1-1-1-1-1',
          type: {
            N  : 4,
            NE : 1,
            SE : 3,
            S  : 3,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'montagneForestRiviere21',
          src: '2-1-1-1-1-1',
          type: {
            N  : 4,
            NE : 2,
            SE : 3,
            S  : 3,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'montagneForestRiviere22',
          src: '2-1-1-1-1-1',
          type: {
            N  : 4,
            NE : 3,
            SE : 3,
            S  : 2,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'montagneForestRiviere23',
          src: '2-1-1-1-1-1',
          type: {
            N  : 4,
            NE : 3,
            SE : 3,
            S  : 2,
            SW : 2,
            NW : 2
          }
        },
        {
          name: 'montagneForestRiviere24',
          src: '2-1-1-1-1-1',
          type: {
            N  : 4,
            NE : 2,
            SE : 3,
            S  : 2,
            SW : 2,
            NW : 2
          }
        },
        {
          name: 'montagneForestRiviere25',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 1,
            SE : 4,
            S  : 2,
            SW : 3,
            NW : 1
          }
        },
        {
          name: 'montagneForestRiviere26',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 2,
            SE : 4,
            S  : 3,
            SW : 3,
            NW : 2
          }
        },
        {
          name: 'montagneForestRiviere27',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 2,
            SE : 4,
            S  : 1,
            SW : 1,
            NW : 2
          }
        },
        {
          name: 'montagneForestRiviere28',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 2,
            SE : 4,
            S  : 2,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'montagneForestRiviere29',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 2,
            SE : 4,
            S  : 1,
            SW : 2,
            NW : 1
          }
        },
        {
          name: 'montagneForestRiviere30',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 2,
            SE : 2,
            S  : 1,
            SW : 1,
            NW : 4
          }
        },
        {
          name: 'montagneForestRiviere31',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 1,
            SE : 2,
            S  : 1,
            SW : 3,
            NW : 4
          }
        },
        {
          name: 'montagneForestRiviere32',
          src: '2-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 3,
            SE : 2,
            S  : 3,
            SW : 1,
            NW : 4
          }
        },
        {
          name: 'champsMontagne',
          src: '2-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 5,
            SE : 3,
            S  : 3,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'champsMontagne2',
          src: '2-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 5,
            SE : 1,
            S  : 3,
            SW : 1,
            NW : 3
          }
        },
        {
          name: 'champsMontagne3',
          src: '2-1-1-1-1-1',
          type: {
            N  : 1,
            NE : 5,
            SE : 1,
            S  : 3,
            SW : 1,
            NW : 1
          }
        },
        {
          name: 'champsMontagne4',
          src: '2-1-1-1-1-1',
          type: {
            N  : 3,
            NE : 1,
            SE : 1,
            S  : 1,
            SW : 5,
            NW : 3
          }
        },
      ]

export default tilesInit;