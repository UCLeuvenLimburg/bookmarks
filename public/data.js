function createBookmarks(addBookmark) {
    [{
            label: 'Haskell Hierarchical Libraries',
            url: "https://downloads.haskell.org/~ghc/latest/docs/html/libraries/index.html",
            tags: ['Haskell', 'library', 'reference'],
            description: 'Documentation for Haskell modules'
        },
        {
            label: 'Real World Haskell',
            url: `http://book.realworldhaskell.org/read/`,
            tags: ['Haskell', 'free book', 'tutorial'],
            description: 'Practical applications of Haskell'
        },
        {
            label: `Hoogle`,
            url: `https://www.haskell.org/hoogle/`,
            tags: ['Haskell', 'library', 'reference'],
            description: `API Search Engine`,
        },
        {
            label: `Glasgow Haskell Compiler`,
            url: `https://www.haskell.org/ghc/`,
            tags: ['Haskell', 'software'],
            description: `Haskell compiler`,
        },
        {
            label: "Don't fear the Monad",
            url: "https://channel9.msdn.com/Shows/Going+Deep/Brian-Beckman-Dont-fear-the-Monads",
            tags: ['Haskell', 'video', 'tutorial'],
            description: `Good explanation of monads`,
        },
        {
            label: "TypeScript Home Page",
            url: "http://www.typescriptlang.org/",
            tags: ['TypeScript', 'web'],
            description: `Typed JavaScript`,
        },
        {
            label: "Git",
            url: "https://git-scm.com/",
            tags: ['Git', 'software'],
        },
        {
            label: "Pro Git",
            url: "https://git-scm.com/book/",
            tags: ['Git', 'free book'],
            description: `Excellent book on Git`,
        },
        {
            label: "GitHub",
            url: "https://github.com",
            tags: ['Git'],
            description: `Web-based hosting service for Git`,
        },
        {
            label: "BitBucket",
            url: "https://bitbucket.org",
            tags: ['Git'],
            description: `Web-based hosting service for Git`,
        },
        {
            label: "GitLab",
            url: "https://about.gitlab.com/",
            tags: ['Git'],
            description: `Web-based hosting service for Git`,
        },
        {
            label: "Learn Git Branching",
            url: "https://learngitbranching.js.org/",
            tags: ['Git', 'tutorial'],
            description: 'Interactive online tutorial on Git branching'
        },
        {
            label: "Practical Go: Real world advice for writing maintainable Go programs",
            url: "https://dave.cheney.net/practical-go/presentations/qcon-china.html",
            tags: ['Go'],
        },
        {
            label: "ReactJS",
            url: "https://reactjs.org/",
            tags: ['front end', 'JavaScript', 'web', 'library', 'React'],
        },
        {
            label: "react-window",
            url: "https://github.com/bvaughn/react-window",
            tags: ['front end', 'JavaScript', 'web', 'library', 'React'],
            description: `React components for efficiently rendering large lists and tabular data`,
        },
        {
            label: "Styled Components",
            url: "https://www.styled-components.com/",
            tags: ['front end', 'JavaScript', 'web', 'library', 'React'],
            description: `Library for styling React components`,
        },
        {
            label: "react-gh-pages",
            url: "https://github.com/gitname/react-gh-pages",
            tags: ['JavaScript', 'library', 'React'],
            description: `Package to deploy React apps to GitHub Pages`,
        },
        {
            label: "Material UI",
            url: "https://material-ui.com/",
            tags: ['front end', 'JavaScript', 'web', 'library'],
        },
        {
            label: "Angular",
            url: "https://angular.io/",
            tags: ['front end', 'TypeScript', 'web', 'library'],
        },
        {
            label: "Vue.js",
            url: "https://vuejs.org/",
            tags: ['front end', 'JavaScript', 'web', 'library'],
        },
        {
            label: "Visual Studio Code",
            url: "https://code.visualstudio.com/",
            tags: ['IDE'],
            description: `Lightweight IDE with support for many languages`
        },
        {
            label: "Visual Studio",
            url: "https://visualstudio.microsoft.com/",
            tags: ['IDE', 'C#', 'C++', 'F#'],
            description: `IDE for C#, C++, F# and others`
        },
        {
            label: "Emacs",
            url: "https://www.gnu.org/software/emacs/",
            tags: ['IDE'],
            description: `Better than VIM`,
        },
        {
            label: "Ralf Brown's Interrupt List",
            url: "http://www.ctyme.com/rbrown.htm",
            tags: ['assembly'],
        },
        {
            label: "32bit DOS Development with Open Watcom",
            url: "http://tuttlem.github.io/2015/10/04/32bit-dos-development-with-open-watcom.html",
            tags: ['C++', 'software'],
        },
        {
            label: "Allegro",
            url: "http://liballeg.org/",
            tags: ['C++', 'library'],
            description: `Game Programming Library for C++`,
        },
        {
            label: "The Last Thing D Needs -- Scott Meyers",
            url: "https://www.youtube.com/watch?v=KAWA1DuvCnQ",
            tags: ['C++', 'video'],
        },
        {
            label: "Godbolt Compiler Explorer",
            url: "https://godbolt.org/",
            tags: ['C++'],
        },
        {
            label: "Unreal Engine",
            url: "https://www.unrealengine.com/en-US/",
            tags: ['C++', 'games', 'library'],
        },
        {
            label: "Docker",
            url: "https://www.docker.com/",
            tags: ['Docker', `virtualization`, `software`],
            description: `Lightweight virtualization`,
        },
        {
            label: "Vagrant",
            url: "https://www.vagrantup.com/",
            tags: ['Vagrant', `virtualization`, `software`],
            description: `Virtualization`,
        },
        {
            label: "Dive Into Docker",
            url: "https://diveintodocker.com/",
            tags: ['Docker', 'tutorial', `virtualization`],
        },
        {
            label: "Docker Hub",
            url: "https://hub.docker.com/",
            tags: ['Docker', `virtualization`],
            description: `Library of Docker images`
        },
        {
            label: "NPM",
            url: "https://www.npmjs.com/",
            tags: ['JavaScript'],
            description: `Package manager for JavaScript`,
        },
        {
            label: "NodeJS",
            url: "https://nodejs.org/",
            tags: ['JavaScript', 'back end', 'software'],
            description: `Allows to run JavaScript code outside of a browser`,
        },
        {
            label: "Impact Game Engine",
            url: "https://impactjs.com/",
            tags: ['JavaScript', 'games', 'library'],
        },
        {
            label: "PixiJS Game Engine",
            url: "http://www.pixijs.com/",
            tags: ['JavaScript', 'games', 'library'],
        },
        {
            label: "p5js",
            url: "https://p5js.org/",
            tags: ['JavaScript', 'graphics', 'library'],
        },
        {
            label: "Functional JS",
            url: "https://medium.com/dailyjs/functional-js-with-es6-recursive-patterns-b7d0813ef9e3",
            tags: ['JavaScript', 'tutorial', 'functional programming'],
        },
        {
            label: "Redux",
            url: "https://redux.js.org/",
            tags: ['JavaScript', 'library'],
            description: `A predictable state container for JavaScript apps`,
        },
        {
            label: "Webpack",
            url: "https://webpack.js.org/",
            tags: ['JavaScript', 'Webpack', 'software'],
            description: `Module bundler`,

        },
        {
            label: "React Native",
            url: "https://facebook.github.io/react-native/",
            tags: ['JavaScript', 'mobile', 'library', 'React'],
        },
        {
            label: "Ionic",
            url: "https://ionicframework.com/",
            tags: ['TypeScript', 'mobile', 'library'],
            description: `Cross-platform mobile app development`,
        },
        {
            label: "Express",
            url: "https://expressjs.com/",
            tags: ['JavaScript', 'back end', 'library'],
            description: `Quickly create web applications in JavaScript`,
        },
        {
            label: "Sinatra",
            url: "http://sinatrarb.com/",
            tags: ['Ruby', 'Sinatra', 'back end', 'web', 'library'],
            description: `Quickly create web applications in Ruby`,
        },
        {
            label: "Sinatra - The Book",
            url: "https://sinatra-org-book.herokuapp.com/",
            tags: ['Ruby', 'Sinatra', 'back end', 'free book', 'web'],
        },
        {
            label: "Ruby on Rails",
            url: "https://rubyonrails.org/",
            tags: ['Ruby', 'Rails', 'back end', 'web'],
        },
        {
            label: "Jekyll",
            url: "https://jekyllrb.com/",
            tags: ['Ruby', 'front end', 'web', 'software'],
            description: `Create static websites (supported by GitHub)`,
        },
        {
            label: "Bundler",
            url: "https://bundler.io/",
            tags: ['Ruby', 'software'],
            description: `Gem manager`,
        },
        {
            label: "RubyMotion",
            url: "http://www.rubymotion.com/",
            tags: ['Ruby', 'mobile', 'library'],
            description: `Write cross-platform native apps in Ruby`,
        },
        {
            label: "Pylons",
            url: "https://pylonsproject.org/",
            tags: ['Pylons', 'Python', 'back end', 'web', 'library'],
            description: `Web technologies for Python`
        },
        {
            label: "Django",
            url: "https://www.djangoproject.com/",
            tags: ['Django', 'Python', 'back end', 'web', 'library'],
        },
        {
            label: "Flask",
            url: "http://flask.pocoo.org/",
            tags: ['Flask', 'Python', 'back end', 'library'],
            description: `Quickly create web applications in Python`,
        },
        {
            label: "Pillow",
            url: "https://pillow.readthedocs.io/",
            tags: ['Python', 'graphics', 'library'],
        },
        {
            label: "Pandas",
            url: "https://pandas.pydata.org/",
            tags: ['Python', 'data analysis', 'library'],
        },
        {
            label: "PyGame",
            url: "https://www.pygame.org",
            tags: ['Python', 'games', 'library'],
        },
        {
            label: "How To Package Your Python Code",
            url: "https://python-packaging.readthedocs.io/",
            tags: ['Python'],
        },
        {
            label: "Virtualenv",
            url: "https://virtualenv.pypa.io",
            tags: ['Python', 'software'],
        },
        {
            label: "Practical Common Lisp",
            url: "http://www.gigamonkeys.com/book/",
            tags: ['Common Lisp', 'free book'],
            description: `Tutorial using practical applications`,
        },
        {
            label: "On Lisp",
            url: "http://www.paulgraham.com/onlisp.html",
            tags: ['Common Lisp', 'free book'],
        },
        {
            label: "Common Lisp Cookbook",
            url: "https://lispcookbook.github.io/cl-cookbook/",
            tags: ['Common Lisp', 'free book'],
        },
        {
            label: "Steel Bank Common Lisp",
            url: "http://www.sbcl.org/",
            tags: ['Common Lisp', `software`],
            description: `High performance Common Lisp compile`,
        },
        {
            label: "Portacle",
            url: "https://portacle.github.io/",
            tags: ['Common Lisp', 'IDE', `software`],
            description: `IDE for Common Lisp`,
        },
        {
            label: "Racket",
            url: "https://racket-lang.org/",
            tags: ['Scheme', 'Racket', 'IDE', `software`],
            description: `IDE for Scheme/Racket`,
        },
        {
            label: "Structure and Interpretation of Computer Programs",
            url: "https://mitpress.mit.edu/sites/default/files/sicp/index.html",
            tags: ['Scheme', 'free book', 'video'],
        },
        {
            label: "Unity Game Engine",
            url: "https://unity.com/",
            tags: ['C#', 'games', 'library'],
        },
        {
            label: "Jupyter",
            url: "https://jupyter.org/",
            tags: ['Jupyter', `software`],
        },
        {
            label: "Mermaid",
            url: "https://mermaidjs.github.io/",
            tags: ['markdown', 'graphics'],
            description: `Draw diagrams in markdown`
        },
        {
            label: "Programmable Web",
            url: "https://www.programmableweb.com/",
            tags: ['reference', 'web'],
            description: `Web API directory`,
        },
        {
            label: "Purely Functional Data Structures",
            url: "http://www.cs.cmu.edu/~rwh/theses/okasaki.pdf",
            tags: ['free book', 'functional programming'],
        },
        {
            label: "Handbook of Applied Cryptography",
            url: "http://cacr.uwaterloo.ca/hac/index.html",
            tags: ['free book', 'security'],
        },
        {
            label: "WebAssembly",
            url: "https://webassembly.org/",
            tags: ['wasm', 'web'],
        },
        {
            label: "Rust",
            url: "https://www.rust-lang.org/",
            tags: ['Rust', `software`],
            description: `Performace oriented language`,
        },
    ].forEach(addBookmark);
}