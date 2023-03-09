const data = 
[
  {
    depth: 1,
    text: "Elder.js: An Opinionated, SEO focused, Svelte Framework.",
    id: "elderjs-an-opinionated-seo-focused-svelte-framework",
    children: [
      {
        depth: 2,
        text: "Getting Started",
        id: "getting-started",
        children: [
          {
            depth: 3,
            text: "Developing using the Template:",
            id: "developing-using-the-template",
          },
          {
            depth: 3,
            text: "To Build/Serve HTML:",
            id: "to-buildserve-html",
          },
          {
            depth: 3,
            text: "Elder.js Intro Video:",
            id: "elderjs-intro-video",
          },
          {
            depth: 3,
            text: "Why We Built Elder.js",
            id: "why-we-built-elderjs",
          },
        ],
      },
      {
        depth: 2,
        text: "Routes",
        id: "routes",
        children: [
          {
            depth: 3,
            text: "Route.js",
            id: "routejs",
          },
          {
            depth: 3,
            text: "Why Routing Differs from Express-like Frameworks",
            id: "why-routing-differs-from-express-like-frameworks",
          },
          {
            depth: 3,
            text: "Route.js Best Practices:",
            id: "routejs-best-practices",
          },
          {
            depth: 3,
            text: "all() Function Spec",
            id: "all-function-spec",
          },
          {
            depth: 3,
            text: "permalink() Function Spec",
            id: "permalink-function-spec",
          },
          {
            depth: 3,
            text: "data() Function Spec",
            id: "data-function-spec",
          },
        ],
      },
      {
        depth: 2,
        text: "Hooks",
        id: "hooks",
        children: [
          {
            depth: 3,
            text: "The Goal of Elder.js Hooks",
            id: "the-goal-of-elderjs-hooks",
          },
          {
            depth: 3,
            text: "Hook Interface: the  and  Arrays",
            id: "hook-interface-the-mutable-and-props-arrays",
          },
          {
            depth: 3,
            text: "Hook Lifecycle",
            id: "hook-lifecycle",
          },
          {
            depth: 3,
            text: "Hook List",
            id: "hook-list",
            children: [
              {
                depth: 4,
                text: "'customizeHooks'",
                id: "hook-customizeHooks",
              },
              {
                depth: 4,
                text: "'bootstrap'",
                id: "hook-bootstrap",
              },
              {
                depth: 4,
                text: "'allRequests'",
                id: "hook-allRequests",
              },
              {
                depth: 4,
                text: "'middleware'",
                id: "hook-middleware",
              },
              {
                depth: 4,
                text: "'request'",
                id: "hook-request",
              },
              {
                depth: 4,
                text: "'data'",
                id: "hook-data",
              },
              {
                depth: 4,
                text: "'shortcodes'",
                id: "hook-shortcodes",
              },
              {
                depth: 4,
                text: "'stacks'",
                id: "hook-stacks",
              },
              {
                depth: 4,
                text: "'head'",
                id: "hook-head",
              },
              {
                depth: 4,
                text: "'compileHtml'",
                id: "hook-compileHtml",
              },
              {
                depth: 4,
                text: "'html'",
                id: "hook-html",
              },
              {
                depth: 4,
                text: "'requestComplete'",
                id: "hook-requestComplete",
              },
              {
                depth: 4,
                text: "'error'",
                id: "hook-error",
              },
              {
                depth: 4,
                text: "'buildComplete'",
                id: "hook-buildComplete",
              },
            ],
          },
          {
            depth: 3,
            text: "Hook Example 1: ",
            id: "hook-example-1-bootstrap",
            children: [
              {
                depth: 4,
                text: "Fetching External Data",
                id: "fetching-external-data",
              },
              {
                depth: 4,
                text: "Adding DB to the  Object",
                id: "adding-db-to-the-query-object",
              },
            ],
          },
          {
            depth: 3,
            text: "Where to Organize Hooks",
            id: "where-to-organize-hooks",
          },
        ],
      },
      {
        depth: 2,
        text: "Plugins",
        id: "plugins",
        children: [
          {
            depth: 3,
            text: "Official Plugins:",
            id: "official-plugins",
          },
          {
            depth: 3,
            text: "Other Plugin Ideas:",
            id: "other-plugin-ideas",
          },
          {
            depth: 3,
            text: "Writing Your Own Plugin",
            id: "writing-your-own-plugin",
          },
          {
            depth: 3,
            text: "Plugin Example 1: S3 Upload",
            id: "plugin-example-1-s3-upload",
          },
        ],
      },
      {
        depth: 2,
        text: "Svelte",
        id: "svelte",
        children: [
          {
            depth: 3,
            text: "Partial Hydration",
            id: "partial-hydration",
          },
          {
            depth: 3,
            text: "Understanding Partial hydration",
            id: "understanding-partial-hydration",
          },
          {
            depth: 3,
            text: "Hydration Options:",
            id: "hydration-options",
          },
          {
            depth: 3,
            text: "How partial hydration works under the covers.",
            id: "how-partial-hydration-works-under-the-covers",
          },
          {
            depth: 3,
            text: "Slots",
            id: "slots",
          },
        ],
      },
      {
        depth: 2,
        text: "Shortcodes",
        id: "shortcodes",
        children: [
          {
            depth: 3,
            text: "Overview",
            id: "overview",
          },
          {
            depth: 3,
            text: "Use Cases For Shortcodes:",
            id: "use-cases-for-shortcodes",
          },
          {
            depth: 3,
            text: "Shortcode Spec:",
            id: "shortcode-spec",
          },
          {
            depth: 3,
            text: "Using Shortcodes from Within Svelte",
            id: "using-shortcodes-from-within-svelte",
          },
        ],
      },
      {
        depth: 2,
        text: "CSS",
        id: "css",
        children: [
          {
            depth: 3,
            text: "Including External CSS",
            id: "including-external-css",
          },
        ],
      },
      {
        depth: 2,
        text: "Elder.js In Detail",
        id: "elderjs-in-detail",
        children: [
          {
            depth: 3,
            text: "Data Flow",
            id: "data-flow",
            children: [
              {
                depth: 4,
                text: "1. Everything starts in a site's route.js files",
                id: "1-everything-starts-in-a-sites-routejs-files",
              },
              {
                depth: 4,
                text: "2. Elder.js Bootstrap Itself",
                id: "2-elderjs-bootstrap-itself",
              },
              {
                depth: 4,
                text: "3. The  Hook is Run",
                id: "3-the-allrequests-hook-is-run",
              },
              {
                depth: 4,
                text: "4. Full 'request' Objects are Built",
                id: "4-full-request-objects-are-built",
              },
              {
                depth: 4,
                text: "5. Hooks are Executed Until the  function is Executed",
                id: "5-hooks-are-executed-until-the-data-function-is-executed",
              },
              {
                depth: 4,
                text: "6. The 'data' hook is Executed",
                id: "6-the-data-hook-is-executed",
              },
              {
                depth: 4,
                text: "7. The data Object is passed to the Svelte template",
                id: "7-the-data-object-is-passed-to-the-svelte-template",
              },
              {
                depth: 4,
                text:
                  "8. The HTML returned by Blog.svelte is passed into Layout.svelte",
                id:
                  "8-the-html-returned-by-blogsvelte-is-passed-into-layoutsvelte",
              },
              {
                depth: 4,
                text: "9. Page Generation Completes",
                id: "9-page-generation-completes",
              },
            ],
          },
          {
            depth: 3,
            text: "Specifications and Config",
            id: "specifications-and-config",
            children: [
              {
                depth: 4,
                text: "Config: ",
                id: "config-elderconfigjs",
              },
              {
                depth: 4,
                text: "Elder.js Expected file structure",
                id: "elderjs-expected-file-structure",
              },
              {
                depth: 4,
                text: "Hook Specification",
                id: "hook-specification",
              },
              {
                depth: 4,
                text: "Plugin Specification",
                id: "plugin-specification",
              },
              {
                depth: 4,
                text: "Route Specification",
                id: "route-specification",
              },
              {
                depth: 4,
                text: "Shortcode Specification",
                id: "shortcode-specification",
              },
              {
                depth: 4,
                text: "Requirements for  and  fields",
                id: "requirements-for-name-and-description-fields",
              },
              {
                depth: 4,
                text: "Stacks: Predictable String Concatenation",
                id: "stacks-predictable-string-concatenation",
              },
            ],
          },
          {
            depth: 3,
            text: "Automatic Behavior",
            id: "automatic-behavior",
          },
          {
            depth: 3,
            text: "Default Helpers",
            id: "default-helpers",
          },
          {
            depth: 3,
            text: "Elder.js Exports:",
            id: "elderjs-exports",
            children: [
              {
                depth: 4,
                text: "",
                id: "server",
              },
              {
                depth: 4,
                text: "",
                id: "build",
              },
              {
                depth: 4,
                text: "",
                id: "getrollupconfig",
                children: [
                  {
                    depth: 5,
                    text: "Replacements",
                    id: "replacements",
                  },
                ],
              },
              {
                depth: 4,
                text: "",
                id: "getelderconfig",
              },
            ],
          },
          {
            depth: 3,
            text: "Using typescript/postcss/scss or other Preprocessors",
            id: "using-typescriptpostcssscss-or-other-preprocessors",
            children: [
              {
                depth: 4,
                text: "Extra setup for typescript",
                id: "extra-setup-for-typescript",
              },
            ],
          },
        ],
      },
      {
        depth: 2,
        text: "FAQ",
        id: "faq",
        children: [
          {
            depth: 3,
            text: "How can I disable a hook?",
            id: "how-can-i-disable-a-hook",
          },
          {
            depth: 3,
            text: "Caching Client Assets",
            id: "caching-client-assets",
          },
          {
            depth: 3,
            text: "How can I copy files to public?",
            id: "how-can-i-copy-files-to-public",
          },
          {
            depth: 3,
            text:
              "Why can't I use Svelte templates for data fetching/manipulation?",
            id: "why-cant-i-use-svelte-templates-for-data-fetchingmanipulation",
          },
          {
            depth: 3,
            text: "How Does Elder.js Differ From Sapper?",
            id: "how-does-elderjs-differ-from-sapper",
          },
          {
            depth: 3,
            text: "Adding Database Access",
            id: "adding-database-access",
          },
          {
            depth: 3,
            text: "Customizing the HTML 'shell'",
            id: "customizing-the-html-shell",
          },
          {
            depth: 3,
            text: "Upgrading to v1.0.0:",
            id: "upgrading-to-v100",
            children: [
              {
                depth: 4,
                text: "File / Hook Changes:",
                id: "file--hook-changes",
              },
            ],
          },
        ],
      },
    ],
  },
];


const container = document.createElement("section");
const basePath = "https://elderguide.com/tech/elderjs/"
const computeDepthText=(depth, text, id)=>{
  if(text.trim()){
    const style =  `padding-left:  ${depth-1?'10px':''};`
    return `<h${depth} style="${style}" id="${id}"><a target="_blank" href="${basePath}#${id}">${text}</a></h${depth}>`
  }
  return ""
}
const renderMenu=(menus=[])=>{
  let dom ="";
  menus.forEach(({depth, text, id, children})=>{
    let route = computeDepthText(depth, text, id)
    if (children) {
      const style =  `margin: 0px ${(depth-1)*10}px; ${text?'padding-left: 10px; border-left: 2px solid gray':''}`
      route += `<div style='${style}'>`+ renderMenu(children) +"</div>"
    
    }
    dom += route;
  })
  return dom 
}
container.innerHTML +=  renderMenu(data)

document.body.appendChild(container)