import { Graph } from '@antv/x6'

const container = document.getElementById('container')
const graph = new Graph({
  container,
  grid: true,
})

// row 1
// -----
graph.addNode({
  x: 40,
  y: 40,
  width: 120,
  height: 60,
  label: 'rect',
})

graph.addNode({
  x: 200,
  y: 40,
  width: 120,
  height: 60,
  label: 'rect',
  attrs: {
    body: {
      stroke: '#ff7875',
      fill: '#ffa39e',
    },
  },
})

graph.addNode({
  x: 360,
  y: 40,
  width: 120,
  height: 60,
  label: 'rect',
  attrs: {
    body: {
      stroke: '#95de64',
      fill: '#b7eb8f',
      rx: 10,
      ry: 10,
    },
  },
})

graph.addNode({
  x: 520,
  y: 40,
  width: 60,
  height: 60,
  label: 'rect',
  attrs: {
    body: {
      stroke: '#85a5ff',
      fill: '#adc6ff',
      rx: 10,
      ry: 10,
    },
  },
})

// row 2
// -----

graph.addNode({
  x: 40,
  y: 140,
  width: 120,
  height: 60,
  label: 'rect',
  attrs: {
    label: {
      refX: 8,
      refY: 8,
      textAnchor: 'start',
      textVerticalAnchor: 'top',
    },
  },
})

graph.addNode({
  x: 200,
  y: 140,
  width: 120,
  height: 60,
  label: 'rect',
  attrs: {
    body: {
      stroke: '#ff7875',
      fill: '#ffa39e',
    },
    label: {
      refX: 8,
      refY: 0.5,
      textAnchor: 'start',
      textVerticalAnchor: 'middle',
    },
  },
})

graph.addNode({
  x: 360,
  y: 140,
  width: 120,
  height: 60,
  label: 'rect',
  attrs: {
    body: {
      stroke: '#95de64',
      fill: '#b7eb8f',
      rx: 10,
      ry: 10,
    },
    label: {
      refX: 8,
      refY: '100%',
      refY2: -8,
      textAnchor: 'start',
      textVerticalAnchor: 'bottom',
    },
  },
})

graph.addNode({
  x: 520,
  y: 140,
  width: 60,
  height: 60,
  label: 'rect',
  attrs: {
    body: {
      stroke: '#85a5ff',
      fill: '#adc6ff',
      rx: 10,
      ry: 10,
    },
    label: {
      refX: 0.5,
      refY: -4,
      textAnchor: 'middle',
      textVerticalAnchor: 'bottom',
    },
  },
})

// row 3
// -----

graph.addNode({
  x: 40,
  y: 240,
  width: 120,
  height: 60,
  label: 'rect',
  attrs: {
    label: {
      refX: 0.5,
      refY: 8,
      textAnchor: 'middle',
      textVerticalAnchor: 'top',
    },
  },
})

graph.addNode({
  x: 200,
  y: 240,
  width: 120,
  height: 60,
  label: 'rect',
  attrs: {
    body: {
      stroke: '#ff7875',
      fill: '#ffa39e',
    },
    label: {
      refX: 0.5,
      refY: 0.5,
      textAnchor: 'middle',
      textVerticalAnchor: 'middle',
    },
  },
})

graph.addNode({
  x: 360,
  y: 240,
  width: 120,
  height: 60,
  label: 'rect',
  attrs: {
    body: {
      stroke: '#95de64',
      fill: '#b7eb8f',
      rx: 10,
      ry: 10,
    },
    label: {
      refX: 0.5,
      refY: '100%',
      refY2: -8,
      textAnchor: 'middle',
      textVerticalAnchor: 'bottom',
    },
  },
})

graph.addNode({
  x: 520,
  y: 240,
  width: 60,
  height: 60,
  label: 'rect',
  attrs: {
    body: {
      stroke: '#85a5ff',
      fill: '#adc6ff',
      rx: 10,
      ry: 10,
    },
    label: {
      refX: '100%',
      refX2: 4,
      refY: 0.5,
      textAnchor: 'start',
      textVerticalAnchor: 'middle',
    },
  },
})

// row 4
// -----

graph.addNode({
  x: 40,
  y: 340,
  width: 120,
  height: 60,
  label: 'rect',
  attrs: {
    label: {
      refX: '100%',
      refX2: -8,
      refY: 8,
      textAnchor: 'end',
      textVerticalAnchor: 'top',
    },
  },
})

graph.addNode({
  x: 200,
  y: 340,
  width: 120,
  height: 60,
  label: 'rect',
  attrs: {
    body: {
      stroke: '#ff7875',
      fill: '#ffa39e',
    },
    label: {
      refX: '100%',
      refX2: -8,
      refY: 0.5,
      textAnchor: 'end',
      textVerticalAnchor: 'middle',
    },
  },
})

graph.addNode({
  x: 360,
  y: 340,
  width: 120,
  height: 60,
  label: 'rect',
  attrs: {
    body: {
      stroke: '#95de64',
      fill: '#b7eb8f',
      rx: 10,
      ry: 10,
    },
    label: {
      refX: '100%',
      refX2: -8,
      refY: '100%',
      refY2: -8,
      textAnchor: 'end',
      textVerticalAnchor: 'bottom',
    },
  },
})

graph.addNode({
  x: 520,
  y: 340,
  width: 60,
  height: 60,
  label: 'rect',
  attrs: {
    body: {
      stroke: '#85a5ff',
      fill: '#adc6ff',
      rx: 10,
      ry: 10,
    },
    label: {
      refX: 0.5,
      refY: '100%',
      refY2: 4,
      textAnchor: 'middle',
      textVerticalAnchor: 'top',
    },
  },
})
