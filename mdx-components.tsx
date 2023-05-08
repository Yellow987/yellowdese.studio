import type { MDXComponents } from 'mdx/types';
import {
  Heading,
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
  Code,
  Link,
} from "@chakra-ui/react"; 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
 
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <Heading as="h1" size="2xl">{children}</Heading>,
    // h2: ({ children }) => <Heading as="h2" size="xl">{children}</Heading>,
    // h3: ({ children }) => <Heading as="h3" size="lg">{children}</Heading>,
    // h4: ({ children }) => <Heading as="h4" size="md">{children}</Heading>,
    // h5: ({ children }) => <Heading as="h5" size="sm">{children}</Heading>,
    // h6: ({ children }) => <Heading as="h6" size="xs">{children}</Heading>,
    // p: ({ children }) => <Text mb="4">{children}</Text>,
    // ul: ({ children }) => <UnorderedList mb="4">{children}</UnorderedList>,
    // ol: ({ children }) => <OrderedList mb="4">{children}</OrderedList>,
    // li: ({ children }) => <ListItem>{children}</ListItem>,
    // pre: ({ children }) => (
    //   <Code fontSize="sm" colorScheme="gray">{children}</Code>
    // ),
    // a: ({ href, children }) => <Link href={href}>{children}</Link>,
    ...components,
  };
}