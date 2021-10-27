declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare module 'js-md5' {
  const classes: { [key: string]: string };
  export default classes;
}

type KeyValuePair = { [k: string]: any };

declare module YMap {
  class Map {
    name: string;
    constructor(el: string, opt: KeyValuePair);
    add: (opt: Partial<{}>) => void;
    setFitView: (opt: [Partial<{}>]) => void;
    getCenter: () => [];
  }

  class PolyEditor {
    constructor(map: Partial<{}>, opt: Partial<{}>);
    on: (name: string, cb: (event: {}) => void) => void;
    open: () => void;
    close: () => void;
  }

  class Polygon {
    name: string;
    constructor(opt: KeyValuePair);
  }

  class Pixel {
    constructor(a: number, b: number);
  }

  class Marker {
    constructor(opt: {
      icon: string;
      position: number[];
      offset: any;
      draggable?: boolean;
      cursor?: 'move' | 'click';
    });
    getPosition: () => { Q: string; R: string };
    setMap: (map: {}) => void;
    on: (k: string, call: (e: KeyValuePair) => void) => void;
  }
}
