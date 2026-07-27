import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 font-heading text-2xl font-bold leading-tight text-shiro md:text-3xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 font-heading text-xl font-bold leading-tight text-shiro"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mt-5 text-base leading-8 text-hai" {...props} />
  ),
  ul: (props) => (
    <ul
      className="mt-5 space-y-3 border-l border-beni/35 pl-6 text-base leading-7 text-hai"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-5 list-decimal space-y-3 pl-6 text-base leading-7 text-hai marker:text-beni"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  strong: (props) => <strong className="font-semibold text-shiro" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-2 border-kin bg-kin/5 px-6 py-4 font-heading text-lg italic leading-8 text-shiro/90"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-susu/30" />,
  a: (props) => (
    <a
      className="font-medium text-beni underline decoration-beni/40 underline-offset-4 transition-colors hover:text-beni-light"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
