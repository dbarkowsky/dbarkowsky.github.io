"use client";

import Grid from '@mui/material/Unstable_Grid2';
import colours from '@/components/Colours';
import PictureBlock from '@/components/posts/PictureBlock';
import TextBlock from '@/components/posts/TextBlock';
import TitleBlock from '@/components/posts/TitleBlock';
import PictureCombo from '@/components/posts/PictureCombo';
import DateBlock from '@/components/posts/DateBlock';
import posts from '@/data/posts';
import SubtitleBlock from '@/components/posts/SubtitleBlock';
import Link from 'next/link';

const Sample = () => {
  const currentPost = posts.find(post => post.title == "Obsidian and Quartz");
  return (
    <Grid container spacing={2} padding="1em" sx={{
      backgroundColor: colours.lightBackground,
      margin: 0,
    }}>
      <TitleBlock>{currentPost.title}</TitleBlock>
      <DateBlock>{currentPost.date.toLocaleDateString('fr-CA')}</DateBlock>

      <TextBlock>
        This post is something a little different. Instead of writing about a project that I&apos;ve made, I&apos;d like to share something that has made it easier to put together my own small works.
      </TextBlock>
      <TextBlock>
        There are a lot of options for note-taking software out there. Honestly, I&apos;ve never really found one that&apos;s perfect, but there&apos;s a lot of options that I intentionally avoid. OneNote, the Microsoft offering, doesn&apos;t come free, and if you&apos;re using the cloud version, you don&apos;t even have local access to your notes without internet. You could go with something simpler, like Notepad++, which is a great application for working with text files, but then you&apos;re giving up a lot of features that make organizing and styling your notes easy.
      </TextBlock>
      <TextBlock>
        The best of both worlds: <a href='https://obsidian.md/'><b>Obsidian</b></a>. Its primary note format is Markdown, which means if you&apos;re familiar with styling stuff for GitHub or README files, then you&apos;ll already know how to get the most out of it. It can handle tables, pictures, links, and much more, and you can keep all your files accessible locally. These files are even readable in other editors because, again, it&apos;s just Markdown.
      </TextBlock>
      <PictureBlock path={'/posts/2025/quartz/obsidian.png'} alt={'Obsidian app screenshot'} />
      <PictureCombo imgPath={'/posts/2025/quartz/web.png'} imgAlt={'Obsidian graph view screenshot'} subtitle={'Graph view of my D&D notes'}>
        I won&apos;t go through all the features, but there are a few I&apos;d like to highlight. By using Obsidian&apos;s special links between files, you can quickly connect anything related then follow those links or just see previews by hovering over them. This also opens up the world of the graph feature, where you can see how all your notes interconnect. As someone who loves these visuals and who is currently working on a Fire-Emblem-themed D&D campaign, I&apos;m having a blast seeing how all my notes are related and which notes are the most connected.
      </PictureCombo>
      <TextBlock>
        There are a lot of plugins as well for everything that&apos;s not natively included. Some of them are provided by the Obsidian developers, but there&apos;s a lot of community support that allows others to write and share their own plugins.
      </TextBlock>
      <TextBlock>
        That being said, it doesn&apos;t have everything. I&apos;m still unable to move totally to Obsidian because I&apos;ve yet to find a solution that password protects the entire vault (Obsidian&apos;s collection of notes). There are plugins to get local encryption of files, but that&apos;s not what I&apos;m looking for.
      </TextBlock>
      <TextBlock>
        They&apos;ll also try to sell you on their cloud storage as a method of syncing your files across systems, but you can easily avoid that by using any number of file-syncing services.
      </TextBlock>
      <TextBlock>
        But the case that I more recently needed was a way to make a vault publicly viewable by anyone with an internet connection. More importantly, they shouldn&apos;t have to be tech-savy to do so.
      </TextBlock>

      {/* Quartz */}
      <SubtitleBlock>Quartz</SubtitleBlock>
      <TextBlock>
        Thankfully someone else has addressed this problem. Quartz is a community-built application that takes your Obsidian vault and converts it into a wiki-like website. It&apos;s written mostly in TypeScript, so if you&apos;re familiar with web development there&apos;s nothing stopping you from modifying it to your needs.
      </TextBlock>
      <PictureBlock path={'/posts/2025/quartz/recipe-vault.png'} alt={'Quartz-generated website screenshot'} />
      <TextBlock>
        It uses a system of components to determine how the page gets populated. By default, there&apos;s stuff like a table of contents and graph view, but you can remove what you don&apos;t like, and if you&apos;re feeling up to it, you can even write your own components.
      </TextBlock>
      <TextBlock>
        Best of all, it keeps a lot of the nice features that Obsidian has. All those notes you interconnected previously? Yeah, the links still work and so does the hover preview.
      </TextBlock>
    <PictureCombo imgPath={'/posts/2025/quartz/window-in-window.png'} imgAlt={'Quartz hover preview screenshot'} side='left' subtitle={'Hover preview of a linked note in Quartz'}>
        <TextBlock>
          Now, the final result is just a statically rendered website, so you can host it pretty much anywhere. I chose to go with GitHub Pages, because every time I push a change it can just run a workflow that builds and deploys the new content.
        </TextBlock>
        <TextBlock>
          Without any customization of your own, it&apos;s going to look a little plain, but don&apos;t be discouraged. It&apos;s function over form here. That makes it great for documentation pages and blogs.
        </TextBlock>
      </PictureCombo>

      {/* Purpose */}
      <SubtitleBlock>Purpose</SubtitleBlock>
      <TextBlock>
        {`Why am I bothering with all this? Well, the D&D campaign I'm working on has a lot of homebrew material. In order for players to explore all the new items, classes, skills, and other goodies, they can now go straight to a website with all those details.`}
      </TextBlock>
      <TextBlock>
        I&apos;ve also used it to create an online repository of recipes. My wife and I found that some of our favourite online recipes that we used occasionally disappeared, either because the website got abandoned or they put them behind a paywall. Now, we can have our own recipe vault that we can load recipes onto and access from anywhere.
      </TextBlock>
      <TextBlock>
        If you&apos;re interested consider checking out the <a href='https://dbarkowsky.github.io/RecipeVault/'>Recipe Vault</a>. Try out some recipes and let me know how they turn out.
        Obviously, I&apos;d also recommend you check out <a href='https://obsidian.md/'>Obsidian</a> and <a href='https://quartz.jzhao.xyz/'>Quartz</a> to start your own Markdown-fueled website today.
      </TextBlock>
    </Grid>
  );
};

export default Sample;
