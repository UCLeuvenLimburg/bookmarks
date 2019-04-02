function createBookmarks(addBookmark) {
    [
        {
            label: 'Haskell Hierarchical Libraries',
            url: "https://downloads.haskell.org/~ghc/latest/docs/html/libraries/index.html",
            tags: ['Haskell', 'library', 'reference'],
            description: 'Documentation for Haskell modules'
        },
        {
            label: 'Real World Haskell',
            url: `http://book.realworldhaskell.org/read/`,
            tags: ['Haskell', 'free book', 'tutorial', 'functional programming'],
            description: 'Practical applications of Haskell'
        },
        {
            label: `Hoogle`,
            url: `https://www.haskell.org/hoogle/`,
            tags: ['Haskell', 'library', 'reference'],
            description: `API Search Engine`,
        },
        {
            label: `Haskell`,
            url: `https://www.haskell.org/ghc/`,
            tags: ['Haskell', 'software', 'functional programming', `programming language`],
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
            tags: ['C++', 'library', 'games'],
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
            label: "Pyramid",
            url: "https://trypyramid.com/",
            tags: ['Pyramid', 'Python', 'back end', 'web', 'library'],
            description: `Quickly create web applications in Python`
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
            tags: ['Scheme', 'Racket', 'IDE', `software`, `programming language`],
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
            tags: ['wasm', 'web', `programming language`],
        },
        {
            label: "Rust",
            url: "https://www.rust-lang.org/",
            tags: ['Rust', `software`, `programming language`],
            description: `Performace oriented language`,
        },
        {
            label: "The Deadlock Empire",
            url: "https://deadlockempire.github.io/",
            tags: ['tutorial', 'concurrency', 'C#'],
            description: `Tutorial on concurrency`,
        },
        {
            label: "Erlang",
            url: "https://www.erlang.org/",
            tags: ['Erlang', 'concurrency', `programming language`],
            description: `Programming language with built-in support for concurrency`,
        },
        {
            label: "Untrusted",
            url: "https://alexnisnevich.github.io/untrusted/",
            tags: ['JavaScript', 'games'],
            description: `A meta-JavaScript adventure game by Alex Nisnevich and Greg Shuflin.`,
        },
        {
            label: "Oz/Mozart",
            url: "https://mozart.github.io/",
            tags: ['Oz', 'concurrency', `programming language`],
            description: `Programming language with built-in support for concurrency`,
        },
        {
            label: "PHP",
            url: "https://www.php.net/",
            tags: ['PHP', 'software', `programming language`],
            description: `So-called programming language targeted to web development`,
        },
        {
            label: "Laravel",
            url: "https://laravel.com/",
            tags: ['PHP', 'library', 'web', 'back end'],
            description: `PHP web framework`,
        },
        {
            label: "Nandgame",
            url: "http://nandgame.com/",
            tags: ['games', 'tutorial'],
            description: `Game teaching working with logic gates`,
        },
        {
            label: "O'Caml",
            url: "http://www.ocaml.org/",
            tags: ['software', `O'Caml`, `programming language`],
            description: `Functional programming language`,
        },
        {
            label: "Python",
            url: "https://www.python.org/",
            tags: ['software', `Python`, `programming language`],
            description: `Programming language for quick development`,
        },
        {
            label: "Ruby",
            url: "https://www.ruby-lang.org/",
            tags: ['software', `Ruby`, `programming language`],
            description: `Programming language for quick development`,
        },
        {
            label: "Go",
            url: "https://golang.org/",
            tags: ['software', `Go`, `programming language`],
            description: `Systems programming language`,
        },
        {
            label: "Scala",
            url: "https://www.scala-lang.org/",
            tags: ['Java', `software`, `programming language`],
            description: `Advanced programming language targeting the JVM`,
        },
        {
            label: "Clojure",
            url: "https://clojure.org/",
            tags: ['Java', `software`, `programming language`],
            description: `Programming language targeting the JVM`,
        },
        {
            label: "Kotlin",
            url: "https://kotlinlang.org/",
            tags: ['Java', `software`, `programming language`],
            description: `Programming language targeting the JVM`,
        },
        {
            label: "Groovy",
            url: "http://groovy-lang.org/",
            tags: ['Java', `software`, `programming language`],
            description: `Programming language targeting the JVM`,
        },
        {
            label: "Prolog",
            url: "http://www.swi-prolog.org/",
            tags: [`software`, `programming language`],
            description: `Logic programming language`,
        },
        {
            label: "Perl",
            url: "https://www.perl.org/",
            tags: [`software`, `programming language`],
            description: `Programming language`,
        },
        {
            label: "C++",
            url: "http://www.cplusplus.com/",
            tags: [`C++`, `programming language`, 'reference', 'tutorial'],
            description: `Performance oriented programming language`,
        },
        {
            label: "C#",
            url: "https://docs.microsoft.com/en-gb/dotnet/csharp/",
            tags: [`C#`, `programming language`, 'reference', 'tutorial'],
            description: `Programming language from Microsoft`,
        },
        {
            label: "F#",
            url: "https://dotnet.microsoft.com/languages/fsharp",
            tags: [`programming language`, 'reference', 'tutorial', 'F#'],
            description: `Programming language from Microsoft`,
        },
        {
            label: "Squeak",
            url: "https://squeak.org/",
            tags: [`software`, `programming language`],
            description: `Programming language`,
        },
        {
            label: "Java",
            url: "https://openjdk.java.net/",
            tags: [`software`, `programming language`],
            description: `Programming language`,
        },
        {
            label: "Eclipse",
            url: "https://www.eclipse.org/",
            tags: [`software`, `IDE`],
            description: `IDE for Java (and other languages)`,
        },
        {
            label: "NetBeans",
            url: "https://netbeans.org/",
            tags: [`software`, `IDE`, 'Java'],
            description: `Java IDE`,
        },
        {
            label: "IntelliJ",
            url: "https://www.jetbrains.com/idea/",
            tags: [`software`, `IDE`, 'Java'],
            description: `Java IDE from JetBrains`,
        },
        {
            label: "RubyMine",
            url: "https://www.jetbrains.com/ruby/",
            tags: [`software`, `IDE`, 'Ruby'],
            description: `Ruby IDE from JetBrains`,
        },
        {
            label: "PyCharm",
            url: "https://www.jetbrains.com/pycharm/",
            tags: [`software`, `IDE`, 'Python'],
            description: `Python IDE from JetBrains`,
        },
        {
            label: "CLion",
            url: "https://www.jetbrains.com/clion/",
            tags: [`software`, `IDE`, 'C++'],
            description: `C++ IDE from JetBrains`,
        },
        {
            label: "SVG",
            url: "https://developer.mozilla.org/en-US/docs/Web/SVG",
            tags: [`web`],
            description: `XML-based markup language for vector graphics`,
        },
        {
            label: "Coq",
            url: "https://coq.inria.fr/",
            tags: [`software`, `programming language`],
            description: `Proof assistant`,
        },
        {
            label: "Dart",
            url: "https://www.dartlang.org/",
            tags: [`software`, `programming language`],
            description: `Programming language (Google)`,
        },
        {
            label: "Factor",
            url: "https://factorcode.org/",
            tags: [`software`, `programming language`],
            description: `Stack based programming language`,
        },
        {
            label: "TeX Live",
            url: "https://www.tug.org/texlive/",
            tags: [`software`],
        },
        {
            label: "ImageMagick",
            url: "https://www.imagemagick.org/",
            tags: [`software`, `graphics`],
            description: `Image manipulation software - usable from shell`
        },
        {
            label: "FFmpeg",
            url: "https://ffmpeg.org/",
            tags: [`software`, `graphics`],
            description: `Record, convert and stream audio and video.`
        },
        {
            label: "Android Studio",
            url: "https://developer.android.com/studio",
            tags: [`software`, `IDE`, 'Java', 'mobile'],
            description: `IDE for Android development`,
        },
        {
            label: "A Complete Guide to Flexbox",
            url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
            tags: ['web', 'tutorial', 'front end'],
        },
        {
            label: "Flow",
            url: "https://flow.org/",
            tags: ['web', 'programming language', 'JavaScript'],
            description: `Static type checker for JavaScript`,
        },
        {
            label: "Sass",
            url: "https://sass-lang.com/",
            tags: ['web', 'front end'],
            description: `CSS with superpowers`,
        },
        {
            label: "JQuery",
            url: "https://jquery.com/",
            tags: ['web', 'JavaScript', 'front end', 'library'],
            description: `JavaScript library`,
        },
        {
            label: "Ramda",
            url: "https://ramdajs.com/",
            tags: ['web', 'JavaScript', 'library', 'functional programming'],
            description: `A practical functional library for JavaScript programmers`,
        },
        {
            label: "Sanctuary",
            url: "https://sanctuary.js.org/",
            tags: ['web', 'JavaScript', 'library', 'functional programming'],
            description: `A functional library for JavaScript programmers`,
        },
        {
            label: "Lodash",
            url: "https://lodash.com/",
            tags: ['web', 'JavaScript', 'library'],
            description: `JavaScript algorithmic library`,
        },
        {
            label: "Jenkins",
            url: "https://jenkins.io/",
            tags: ['development'],
            description: `Continuous integration tool`,
        },
        {
            label: "Rouge",
            url: "http://rouge.jneen.net/",
            tags: ['ruby'],
            description: `Code highlighter`,
        },
        {
            label: "Pygments",
            url: "http://pygments.org/",
            tags: ['python'],
            description: `Code highlighter`,
        },
        {
            label: "Don't Use Exceptions for Flow Control",
            url: "http://wiki.c2.com/?DontUseExceptionsForFlowControl",
            tags: ['article'],
        },
        {
            label: "Public APIs",
            url: "https://github.com/toddmotto/public-apis/blob/master/README.md",
            tags: ['reference', 'web'],
            description: 'List of free web APIs'
        },
        {
            label: "Gamasutra",
            url: "http://www.gamasutra.com/",
            tags: ['games'],
            description: 'Website focused on game development'
        },
        {
            label: "The Old New Thing",
            url: "https://devblogs.microsoft.com/oldnewthing/",
            tags: ['article'],
            description: `Raymond Chen's blog`
        },
        {
            label: "Exercism.io",
            url: "https://exercism.io/",
            tags: ['education'],
            description: `Educational site with programming exercises in many different languages`
        },

    ].forEach(addBookmark);
}