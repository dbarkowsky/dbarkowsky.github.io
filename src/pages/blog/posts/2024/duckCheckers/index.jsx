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

const Sample = () => {
  const currentPost = posts.find(post => post.title == "Duck Checkers");
  return (
    <Grid container spacing={2} padding="1em" sx={{
      backgroundColor: colours.lightBackground,
      margin: 0,
    }}>
      <TitleBlock>{currentPost.title}</TitleBlock>
      <DateBlock>{currentPost.date.toLocaleDateString('fr-CA')}</DateBlock>

      <TextBlock>
        Last year, my wife discovered Duck Chess, a version of chess where you put down a duck piece after every move. The duck essentially blocks your opponent for their turn, then the opponent can place their own duck, removing your original one. It seems like a small change, but it has big implications for how the game is played.
      </TextBlock>
      <TextBlock>
        Chess is fine, but checkers is also a game that she often likes to play online against our friends, and she&apos;s good at it. So good that I&apos;ve abandoned the idea of winning a game, but when she had the idea for a version of checkers that also involved the duck piece, I figured it would be a quick piece to put together.
      </TextBlock>
      <TextBlock>Boy, was I wrong.</TextBlock>
      <SubtitleBlock>The Product</SubtitleBlock>
      <TextBlock>
        Users start at the home page. This location allows them to see all the ongoing games to join or to start their own game. In the top right of the page, they can see their username (randomly generated) and click it to scramble it into a new one. I had no interest in managing user accounts for this project, so this was an easy (yet insecure) way of handling it.
      </TextBlock>
      <PictureBlock path={'/posts/2024/duckCheckers/home.png'} />
      <TextBlock>
        Each game card shows the current state of the game. If someone is already in a game, users see their username and have the option of joining the game as their opponent. If they only want to watch the game, they can click the Observe option.
      </TextBlock>
      <PictureCombo imgPath={'/posts/2024/duckCheckers/game.png'}>
        Once in a game, the rules are fairly simple if you&apos;ve ever played checkers. Players take turns moving their pieces, trying to take all of the opponent&apos;s pieces. When it&apos;s a player&apos;s move phase, clicking a checker will highlight all possible moves for that piece. Selecting one of those moves carries it out. The second phase of a player&apos;s turn is the duck phase. They may place the duck on any of the tiles that a piece can normally occupy. This duck blocks other checkers from moving to that space.
        <TextBlock>The game can end in one of three ways: a player has lost all of their pieces, a player has no legal moves remaining, a player forfeits the game. Once the game is over, a user can remain on the page as long as they want, but there&apos;s no interaction. Completed games aren&apos;t stored, so after returning to the main page the game is gone.
        </TextBlock>
      </PictureCombo>

      <SubtitleBlock>Learning Goals</SubtitleBlock>
      <TextBlock>
        I set out a couple of new learning goals for myself. Firstly, I knew I was going to need websockets to make this game work smoothly. These were covered lightly in school, but admittedly a lot of that has gone unused since then. Secondly, I had heard so many good things about Svelte, a frontend framework similar to Vue. Videos online always raved about how developer friendly it was, so it was time I gave it a try. Finally, I had also seen a lot of promotion for Bun, an alternative JavaScript runtime to Node. It boasted much faster speeds and several built-in features, so I thought I would use that as my base.
      </TextBlock>

      <SubtitleBlock>Bun</SubtitleBlock>
      <PictureCombo imgPath={'/posts/2024/duckCheckers/bun.png'} side='left' imgColWidth={4}>
        This was the first hurdle of the project. At the time I started, Bun only ran on Linux systems, of which I had none. I had a Mac for work, but I wasn&apos;t keen on using the work laptop, so I had to create a developer container instead. Docker is a resource hog, so this wasn&apos;t my favourite solution, but it was consistent across systems. The container essentially installs Bun and then you can connect to it using VS Code. As for the developer experience, I didn&apos;t find an improvement versus using Node. Sure, I&apos;ve seen benchmarks where Bun definitely outperforms at high loads, but this was not that case, so it mostly just amounted to me typing “bun” instead of “npm” for most commands.
      </PictureCombo>

      <SubtitleBlock>Elysia</SubtitleBlock>
      <TextBlock>Part of choosing Bun was that I was also going to try out Elysia for my API framework. I didn&apos;t need much for a backend, so it seemed like a good fit, and it was Bun&apos;s advertised API framework. I immediately ran into issues. I like to use TypeScript on my projects these days, but there were typing errors that impeded its use. The straw that broke the camel&apos;s back was around HTTP request params. Every time you included a request param, it would have required forcing a custom type because Elysia doesn&apos;t allow for just any param name. Sure enough, I found this issue open on their GitHub Issues, and I added my two cents. In the end, I switched back to old, familiar Express. It just works.
      </TextBlock>

      <SubtitleBlock>Svelte</SubtitleBlock>
      <PictureCombo imgPath={'/posts/2024/duckCheckers/svelte.png'}>
        This was an interesting experience. Most of this work was done prior to the Svelte runes update, so I can&apos;t comment on that too much. I&apos;ve heard it&apos;s good. I started by doing their online tutorial. It&apos;s a good one to follow if you&apos;re starting with Svelte. It really highlighted the power of some of their built-in animation libraries. Svelte is just the framework of components though. You&apos;ll need SvelteKit to order them, and Vite to run them. It felt like a strange hierarchy of services that added more complexity than needed.
      </PictureCombo>
      <TextBlock>
        Svelte is similar to Vue in that you store the script, HTML, and CSS all in one file for a component. You can still import code from other files, but if it&apos;s specific to this component, it should go in this file. I like how this approach keeps things organised. Even nicer that it keeps the CSS scoped. I did remember that I don&apos;t love doing CSS without a library, and Svelte didn&apos;t really have an option that I jived with. I ended up just doing it myself, so that&apos;s why it looks the way it does.
      </TextBlock>
      <TextBlock>
        The use of stores is an interesting way of handling state. I treated it like React Context, but with the intention to set the state and use it like a tracker within the game. I&apos;m sure there are a lot of best practices that I broke here, but I liked having two stores: one for the game (should be synced between users) and one for the individual user&apos;s data, like which tiles should be highlighted on screen.
      </TextBlock>

      <SubtitleBlock>Websockets</SubtitleBlock>
      <TextBlock>
        When you play online games, the interaction requires a smoothness that you can never get with HTTP requests. Plus, HTTP is all about the request and response flow. Websockets are needed for that unsolicited sending of data to keep the board updated as soon as the other player makes a move. Without websockets, you&apos;d have to constantly make requests to see if things had changed. It&apos;s simply the best way to make an online game.
      </TextBlock>
      <TextBlock>
        The data that websockets transmit is essentially text, but I found that if I stringify JSON data and parse it on the other side, it really opened up what I could do with it. I decided to use a messaging system of sorts. When a websocket message is received, the message will be marked with a number that corresponds to that message type. For example, the message types include Arrival Announcement, Game State, and Move Request, but there are many more. Both the client and server look at the type of message and decide how to handle that in general.
      </TextBlock>
      <TextBlock>
        This system ends up being very consistent because I can broadcast the message if all connected users need to receive the update and the messages are always idempotent. If for some reason the game&apos;s state is sent twice, all users will still be in-sync.
      </TextBlock>
      <PictureCombo imgPath={'/posts/2024/duckCheckers/pingpong.png'} side='left'>
        One hiccup that was pointed out to me later was the issue of disconnecting sockets. I had identified when a user closed their connection, which covered leaving the page or closing the browser, but it turns out that after being idle for a set amount of time, the socket would disconnect on its own. The solution to that was a ping-pong action where the client checks the responsiveness of the server every ten seconds and gets a response. This check makes sure the socket stays open until the user intentionally leaves the game.
      </PictureCombo>

      <SubtitleBlock>Deployment</SubtitleBlock>
      <TextBlock>
        I wasn&apos;t really planning on letting anyone play at first. Dealing with application traffic and uptime is a long-term commitment, but I wanted my wife and friends to be able to play at least. At first I imagined that I could run the Docker containers on my Raspberry Pi and just port forward the access. Turns out the standard Bun image doesn&apos;t support arm64/v7 architecture. I could run it on my Windows machine, but I didn&apos;t really want to keep that running 24/7, and the router from Rogers, my internet provider, doesn&apos;t seem to actually allow port forwarding. Time for a 3rd-party router probably.
      </TextBlock>
      <PictureCombo imgPath={'/posts/2024/duckCheckers/arch.png'} imgColWidth={4}>
        I was feeling disenchanted about getting Duck Checkers live until I talked to a friend who was having similar issues. Everyone wants a free hosting service for their fun projects. While looking for something for him, I ended up looking into the offerings of the big competitors: Google, Azure, Amazon. Google won out here with a dead-simple tool called Google Cloud Run. For no cost (below a reasonable threshold), I could host Docker containers and expose them to the outside world. Most of my cloud hosting experience is with OpenShift, but this was honestly easier than that.
        <TextBlock>The process went like this: </TextBlock>
        <ol>
          <li>Tag and push images to Docker Hub</li>
          <li>Configure and deploy that image in Google Cloud Run</li>
        </ol>
      </PictureCombo>
      <TextBlock>
        That&apos;s it. It took a little tweaking to get the environment variables just right, but it worked pretty well. I ended up using Mongo Atlas for an online solution for my Mongo database because they also have a small free offering. The only downside to this whole thing is that my Google Cloud containers sleep when not in use, so if it&apos;s the first time that someone has accessed them in a while, the spin-up time is a few seconds.
      </TextBlock>

      <SubtitleBlock>Parting Words</SubtitleBlock>
      <TextBlock>
        I can&apos;t guarantee that this site will still be up by the time you read this, but there&apos;s a chance you could <a href={currentPost.paths.demo}>play Duck Checkers right here</a>. If not, visit <a href={currentPost.paths.code}>the GitHub repository</a> and run it yourself. Instructions are there, and it&apos;s not asking for a lot. In case the live site is gone and you can&apos;t run a local copy, here&apos;s a demo:
      </TextBlock>
      <PictureBlock path={'/posts/2024/duckCheckers/demo.gif'}></PictureBlock>
      <TextBlock>
        I chipped away at this project for about a year. There were months I didn&apos;t touch it at all, and I was ready to call it several times, but I&apos;m glad it&apos;s done. It&apos;s just in time for this year&apos;s Advent of Code.
      </TextBlock>
    </Grid>
  );
};

export default Sample;
