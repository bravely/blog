import marked from 'marked'

// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: "How I figured out my anxiety with GTD",
		slug: 'how-i-figured-out-my-anxiety-with-gtd',
		markdown: `I didn't discover I had severe anxiety issues until 2015. I had been let go from two jobs in a row and was trying to not lose my opportunity in the tech industry as a developer.

What I now know, is I had three forms of anxiety: Time anxiety, social anxiety, and generalized anxiety(which I tend to think of as 'complexity anxiety').

* **Time anxiety** colloquially is the fear of falling behind or running out of time. If given an unreasonable deadline, I'll worry about nothing but the timeline all the way into the deadline.
* **Social anxiety** people generally are familiar with, often manifesting as fear of awkward or difficult situations with others.  For myself, this can also compound with time anxiety, such as being unable to answer a question because the answer might be longer than they expected.
* **Complexity anxiety** is what I call my anxiety of "too many things": worrying about losing track, too much variety, or too full a day.

Every day, I'd lose hours to worry: Money, family, my lacking social life, and even just daily chores.  It wasn't uncommon for my head to feel full all day, and my attitude to be barely acceptable.

## Discovering Getting Things Done
One day, Hacker News had a book recommendation that I didn't take seriously at first: [Getting Things Done](https://smile.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563/ref=sxts_sxwds-bia-wc-p13n1_0?cv_ct_cx=getting+things+done&dchild=1&keywords=getting+things+done&pd_rd_i=0143126563&pd_rd_r=acd4c3e3-2bd7-400a-81d3-b4809eb38834&pd_rd_w=8BMEt&pd_rd_wg=cL4gp&pf_rd_p=f4ebc3ce-c45d-4b03-a3e4-a17c876358c0&pf_rd_r=XP9N73MP3J95VY51YDWB&psc=1&qid=1604872280&sa-no-redirect=1&sr=1-1-80ba0e26-a1cd-4e7b-87a0-a2ffae3a273c). I nearly passed it up entirely, the generic business-book cover actively dissuading me from thinking I'd get anything from it. Before almost closing the tab- I noticed its subtitle, *"The Art of Stress-Free Productivity"*. That 'stress-free' bit hooked me. I bought the audiobook since I had a free credit.

Immediately, it had an impact. In fact, the introduction clearly demonstrated its power:

> "I suggest that you write down the project or situation that is most on your mind at this moment. What most bugs you, distracts you, or interests you, or in some other way consumes a large part of your conscious attention? It may be a project or problem that is really 'in your face,' something you are being pressed to handle, or a situation you feel you must deal with sooner rather than later.
>
> . . .
>
> Got it? Good. Now, describe, in a single written sentence, your intended successful outcome for this problem or situation.
>
> . . .
>
> Now write down the very next physical action required to move the situation forward. If you had nothing else to do in your life but get closure on this, what visible action would you take right now?
>
> . . .
>
> Got the answer to that? Good.
> Was there any value for you in those two minutes of thinking? If you're like the vast majority of people who complete the drill... you'll be experiencing at least a tiny bit of enhanced control, relaxation, and focus." **(David Allen, *Getting Things Done*, 14-15)**

There I was in my car, perhaps 20 minutes into the audiobook, and I'd felt my first sense of clarity and focus in months. There were a few particular benefits in this that became my reason for completely changing my approach to life.

The first was the ability to simply get things out of my mind. Having only a single action at the front of your mind is an incredible, freeing feeling, and as many books and studies will tell you, a key to [Flow](https://smile.amazon.com/Flow-Psychology-Experience-Perennial-Classics/dp/0061339202?sa-no-redirect=1). Having the confidence that nothing will get lost because you wrote it down in a system that makes recollection and consideration priority, allows you to let go.

Furthermore, it let me actually prioritize what was urgent and important, then urgent, then important, then everything else, in that order. And since I could start actually finishing tasks with the previous strategy, I got through those first three categories quickly. This brought a feeling of normalcy, of being on top of my life, for the first time in years.

By the end of my first week employing this, I'd cleared away over a third of my list. I'd completed a backlog of job applications, bills, and paperwork. I'd started working on a new side project that could get me in front of people who would otherwise ignore me. I even began to exercise simply because I had the clarity of mind to fit it in. I could have a clear day and know that when I played games in the evening, I'd had a day I was proud of behind me.

So, what does this look like now?

# The core of my GTD Framework

My version of GTD isn't quite the same as David Allen's. It's certainly inspired by it, with myself often referring back when I'm finding issues with it. But the core of it gets to what I need to resolve those issues every day, at least as best I can.

## Make an Inbox

Your "inbox" is your dumping ground. Anytime something comes into your mind that isn't directly related to what you're doing right now, you toss it in your inbox to be sorted later. Nothing is too small or pointless to make it in the inbox- after all, it was important enough to distract you. You at least need to think it through.

When you finally get around to organizing your inbox, there's a consideration list for each item:
1. Do you need to care about it at all? If not, **delete it**.
2. Does it need to be done right now? If not, **defer it**.
3. Are you the best person to do it right now? If not, **delegate it**.
4. Looks like you need to do it. If it can be completed in two minutes, **do it**.
5. Is it big?
    * If so, **this is a project**, so make a new list for that.
    * If not, stick it on today's list and then **rephrase it as the next physical action to get it done**.

That's it. The first three are commonly referred to as "The Three Ds," and a surprising amount of what runs through your head can be comfortably dealt with just these. But at the same time, dealing with them this way seems to get them out of your head permanently- well, except for delegating, which I often will make a deferred task to check in later.

However, 4 and 5 are where we start seeing a need for categories.

## Categories
Technically, we've already created one category: Inbox. It's easily the most required one, and by itself will do an incredible amount of work. When I first started all I had was this, for a surprising amount of time. New things in the inbox went at the top, and organizing meant putting them into the proper priority order. But pretty soon, you notice life is complicated enough that a few more are helpful.

An important category is "Today." It's self-explanatory, in letting me concentrate on purely what I want to accomplish today. But it requires care: It's easy to let a "Today" category put its items at a priority they don't deserve, and even easier to just keep bumping unfinished work to the next day without review.

Then there are the dual categories of "home" and "work." Friends and family tend to respond well to well-defined working hours, which by default GTD doesn't handle extremely well. I tend to sort my inbox into Home or Work lists, since most applications now allow you to designate a day to do them on, allowing your "today" list to take from other lists. Allen often refers to this concept as a "Context," but software generally handles it poorly(and I handle written versions of this system poorly).

## Weekly Review

This is one I feel a distinct need to improve since at the moment it has come down to running through the 5 steps with my Home/Work lists before reordering them.

This has the benefit of making it feel like you know what your priorities are in life, even if they're not high enough to be worked on today. Furthermore, touching on them in the review goes a long way in letting you think about them just enough to develop the idea further, possibly cutting its scope or changing the goal.

However, not being able to look at them all together blurs the lines of what's important in your life, and I still don't have a great way of angling them toward ongoing goals(though, more on this in the future!).

I'd love to [hear your thoughts](https://twitter.com/bravelyjake) and systems, as I've found that those who care enough to have a system at all usually have both certain elements in common, and certain aspects that work especially well for them.
`
	},

	{
		title: 'What is Sapper?',
		slug: 'what-is-sapper',
		html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
	},

	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => {
	if (post.markdown) {
		post.html = marked(post.markdown)
	}
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
