import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

import readingTime from 'reading-time';

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc: any) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: "string",
    resolve: (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};



const Projects = defineDocumentType(() => ({
  name: "Projects",
  filePathPattern: "projects/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    description: { type: "string", required: false, defaultValue: null },
    featured: {
      type: "boolean", required: false, defaultValue: false
    },
    github: { type: "string", required: true },
    tech: {
      type: "list", required: false,
      defaultValue: null,
      of: { type: "string", required: true },
    },

    external: {
      type: "string", required: false,
      defaultValue: null
    },
    image: { type: "string", required: true },
  },
  computedFields,
}));



export default makeSource({
  documentTypes: [Projects],
  contentDirPath: "src/data",
});


