import fs from 'fs';
import path from 'path';

type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
};

function parseFrontMatter(fileContent: any) {
    let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    let match = frontmatterRegex.exec(fileContent);
    let frontMatterBlock = match![1];
    let content = fileContent.replace(frontmatterRegex, '').trim();
    let frontMatterLines = frontMatterBlock.trim().split('\n');
    let metadata: Partial<Metadata> = {};

    frontMatterLines.forEach((line) => {
        let [key, ...valueArr] = line.split(': ');
        let value = valueArr.join(': ').trim();
        value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
        metadata[key.trim() as keyof Metadata] = value;
    });

    return { metadata: metadata as Metadata, content };
}

export function getBlogPosts() {
    const postsDirectory = path.join(process.cwd(), 'content');
    const postFiles = fs.readdirSync(postsDirectory);

    const posts = postFiles.map(postFile => {
        const postPath = path.join(postsDirectory, postFile);
        const fileContent = fs.readFileSync(postPath, 'utf-8');
        let slug = path.basename(postFile, path.extname(postFile));
        let { metadata, content } = parseFrontMatter(fileContent);

        return {
            metadata,
            slug,
            content
        }
    });

    return posts;
}