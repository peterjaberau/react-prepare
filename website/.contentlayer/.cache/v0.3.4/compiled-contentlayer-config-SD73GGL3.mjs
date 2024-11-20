// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import fs from "fs";
import toc from "markdown-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkDirective from "remark-directive";

// lib/remark-utils.ts
import { h } from "hastscript";
import { visit } from "unist-util-visit";
function isDirective(node) {
  return node.type === "textDirective" || node.type === "leafDirective" || node.type === "containerDirective";
}
function remarkAdmonition() {
  return function parse(tree) {
    visit(tree, (node) => {
      if (isDirective(node)) {
        const data = node.data || (node.data = {});
        data.hName = "Admonition";
        const element = h(node.name, node.attributes);
        data.hProperties = {
          ...element.properties,
          className: "adminition",
          "data-type": node.name
        };
      }
    });
  };
}

// site.config.ts
var baseConfig = {
  repo: "https://github.com/chakra-ui/ibrainsd",
  title: "Zag - Rapidly build UI components without sweating over the logic.",
  description: "State machines for accessible, interactive and performant UI components",
  url: "https://ibrainsdjs.com"
};
var siteConfig = {
  ...baseConfig,
  projectName: "ibrainsd-js",
  copyright: `Copyright &copy; ${(/* @__PURE__ */ new Date()).getFullYear()}`,
  openCollective: {
    url: "https://opencollective.com/chakra-ui"
  },
  author: {
    name: "Segun Adebayo",
    github: "https://github.com/segunadebayo",
    twitter: "https://twitter.com/thesegunadebayo",
    linkedin: "https://linkedin.com/in/thesegunadebayo",
    polywork: "https://www.polywork.com/segunadebayo",
    email: "sage@adebayosegun.com"
  },
  repo: {
    url: "https://github.com/chakra-ui/ibrainsd",
    editUrl: `${baseConfig.repo}/edit/main/website/data`,
    blobUrl: `${baseConfig.repo}/blob/main`
  },
  discord: {
    url: "https://ibrainsdjs.com/discord"
  },
  seo: {
    title: baseConfig.title,
    titleTemplate: "%s - Zag",
    description: baseConfig.description,
    siteUrl: baseConfig.url,
    twitter: {
      handle: "@ibrainsd_js",
      site: baseConfig.url,
      cardType: "summary_large_image"
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseConfig.url,
      title: baseConfig.title,
      description: baseConfig.description,
      site_name: baseConfig.title,
      images: [
        {
          url: `${baseConfig.url}/open-graph/website.png`,
          width: 1240,
          height: 480
        },
        {
          url: `${baseConfig.url}/open-graph/twitter.png`,
          width: 1012,
          height: 506
        }
      ]
    }
  }
};
var site_config_default = siteConfig;

// lib/svelte-highlight.ts
import markdown from "refractor/lang/markdown.js";
import { refractor } from "refractor/lib/core.js";
import rehypePrismGenerator from "rehype-prism-plus/generator";
svelte.displayName = "svelte";
svelte.aliases = [];
var blocks = "(if|else if|await|then|catch|each|html|debug)";
function svelte(Prism) {
  Prism.register(markdown);
  (function(Prism2) {
    Prism2.languages.svelte = Prism2.languages.extend("markup", {
      each: {
        pattern: new RegExp(
          "{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"
        ),
        inside: {
          "language-javascript": [
            {
              pattern: /(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,
              lookbehind: true,
              inside: Prism2.languages["javascript"]
            },
            {
              pattern: /(as[\s]*)[\s\S]*(?=\s*)/,
              lookbehind: true,
              inside: Prism2.languages["javascript"]
            },
            {
              pattern: /(#each[\s]*)[\s\S]*(?=as)/,
              lookbehind: true,
              inside: Prism2.languages["javascript"]
            }
          ],
          keyword: /[#/]each|as/,
          punctuation: /{|}/
        }
      },
      block: {
        pattern: new RegExp(
          "{[#:/@]/s" + blocks + "(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"
        ),
        inside: {
          punctuation: /^{|}$/,
          keyword: [new RegExp("[#:/@]" + blocks + "( )*"), /as/, /then/],
          "language-javascript": {
            pattern: /[\s\S]*/,
            inside: Prism2.languages["javascript"]
          }
        }
      },
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: true,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/i,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "language-javascript": {
            pattern: /\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,
            inside: Prism2.languages["javascript"]
          },
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
            inside: {
              punctuation: [
                /^=/,
                {
                  pattern: /^(\s*)["']|["']$/,
                  lookbehind: true
                }
              ],
              "language-javascript": {
                pattern: /{[\s\S]+}/,
                inside: Prism2.languages["javascript"]
              }
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      "language-javascript": {
        pattern: /\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,
        lookbehind: true,
        inside: Prism2.languages["javascript"]
      }
    });
    Prism2.languages.svelte["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.svelte["entity"];
    Object.defineProperty(Prism2.languages.svelte.tag, "addInlined", {
      value: function addInlined(tagName, lang) {
        const includedCdataInside = {};
        includedCdataInside["language-" + lang] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: Prism2.languages[lang]
        };
        includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
        const inside = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: includedCdataInside
          }
        };
        inside["language-" + lang] = {
          pattern: /[\s\S]+/,
          inside: Prism2.languages[lang]
        };
        const def = {};
        def[tagName] = {
          pattern: RegExp(
            /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              tagName
            ),
            "i"
          ),
          lookbehind: true,
          greedy: true,
          inside
        };
        Prism2.languages.insertBefore("svelte", "cdata", def);
      }
    });
    Prism2.languages.svelte.tag.addInlined("style", "css");
    Prism2.languages.svelte.tag.addInlined("script", "javascript");
  })(Prism);
}
refractor.register(svelte);
var svelteGenerator = rehypePrismGenerator(refractor);
var svelte_highlight_default = svelteGenerator;

// contentlayer.config.ts
var fields = {
  title: { type: "string" },
  description: { type: "string" },
  package: { type: "string" }
};
var getSlug = (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "");
var computedFields = {
  slug: {
    type: "string",
    resolve: getSlug
  },
  editUrl: {
    type: "string",
    resolve: (doc) => `${site_config_default.repo.editUrl}/${doc._id}`
  },
  params: {
    type: "list",
    resolve: (doc) => doc._raw.flattenedPath.split("/")
  },
  frontmatter: {
    type: "json",
    resolve: (doc) => ({
      title: doc.title,
      description: doc.description,
      tags: doc.tags,
      author: doc.author,
      slug: `/${doc._raw.flattenedPath}`,
      toc: toc(doc.body.raw, { maxdepth: 3 }).json.filter((t) => t.lvl !== 1)
    })
  }
};
var Overview = defineDocumentType(() => ({
  name: "Overview",
  filePathPattern: "overview/**/*.mdx",
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => "/overview/[slug]"
    }
  }
}));
var Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: "guides/**/*.mdx",
  contentType: "mdx",
  fields,
  computedFields
}));
var Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: "components/**/*.mdx",
  contentType: "mdx",
  fields: {
    ...fields,
    slugAlias: { type: "string" }
  },
  computedFields: {
    ...computedFields,
    npmUrl: {
      type: "string",
      resolve: (doc) => `https://www.npmjs.com/package/${doc.package}`
    },
    pathname: {
      type: "string",
      resolve: () => "/components/[...slug]"
    },
    sourceUrl: {
      type: "string",
      resolve: (doc) => `${site_config_default.repo.url}/tree/main/packages/machines/${doc.slugAlias ?? getSlug(doc)}`
    },
    visualizeUrl: {
      type: "string",
      resolve: (doc) => `https://state-machine-viz.vercel.app/${doc.slugAlias ?? getSlug(doc)}`
    },
    version: {
      type: "string",
      resolve: (doc) => {
        try {
          const file = fs.readFileSync(
            `node_modules/${doc.package}/package.json`,
            "utf8"
          );
          return JSON.parse(file).version;
        } catch {
          return "";
        }
      }
    }
  }
}));
var Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: "snippets/**/*.mdx",
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    framework: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFilePath.split("/")[1]
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./data",
  contentDirExclude: ["*/node_modules", "dist"],
  documentTypes: [Overview, Guide, Snippet, Component],
  disableImportAliasWarning: true,
  onUnknownDocuments: "skip-ignore",
  mdx: {
    remarkPlugins: [remarkDirective, remarkAdmonition],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      svelte_highlight_default,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          test: ["h2", "h3", "h4"],
          properties: { className: ["anchor"] }
        }
      ]
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-SD73GGL3.mjs.map
