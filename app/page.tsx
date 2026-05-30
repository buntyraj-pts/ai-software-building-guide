import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import ToolsSection from "@/components/ToolsSection";
import StepSection from "@/components/StepSection";
import CodeBlock from "@/components/CodeBlock";
import WorkflowWalkthrough from "@/components/WorkflowWalkthrough";
import TipsSection from "@/components/TipsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhySection />
        <ToolsSection />

        <StepSection
          id="step-1"
          stepNumber={1}
          title="Set up Cursor"
          link={{ href: "https://cursor.com", label: "Download Cursor →" }}
          screenshotLabel="Cursor welcome screen and chat panel"
          screenshotAlt="Screenshot of Cursor IDE with the AI chat panel open"
        >
          <p>
            <strong>Cursor</strong> is a code editor with a built-in AI assistant.
            It is where you will spend most of your time building.
          </p>
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              Go to{" "}
              <a
                href="https://cursor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline underline-offset-4"
              >
                cursor.com
              </a>{" "}
              and download the app for your computer.
            </li>
            <li>Create a free account and sign in.</li>
            <li>
              Open Cursor and choose <strong>File → Open Folder</strong>. Create
              a new empty folder on your computer for your project, then select
              it.
            </li>
            <li>
              Open the AI chat panel and switch to <strong>Agent</strong> mode
              when you are ready to build.
            </li>
          </ol>
        </StepSection>

        <StepSection
          id="step-2"
          stepNumber={2}
          title="Create your project with AI"
          screenshotLabel="Cursor Agent chat creating project files"
          screenshotAlt="Screenshot of Cursor Agent writing code and showing the file tree"
        >
          <p>
            With your project folder open, describe what you want to build. Here
            is an example prompt you can copy and paste:
          </p>
          <CodeBlock label="Example prompt">
            {`Create a simple one-page website that explains how to start a home garden. Use Next.js and make it look clean and modern with a green color theme.`}
          </CodeBlock>
          <p>When Cursor suggests changes:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Review</strong> what it wants to create or change.
            </li>
            <li>
              <strong>Accept</strong> the changes if they look reasonable.
            </li>
            <li>
              <strong>Ask follow-ups</strong> like &quot;make the heading
              bigger&quot; or &quot;add a contact section.&quot;
            </li>
          </ul>
          <p>
            To preview your site locally, open the terminal in Cursor and run{" "}
            <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm">
              npm run dev
            </code>
            , then open the URL it shows in your browser.
          </p>
        </StepSection>

        <StepSection
          id="step-3"
          stepNumber={3}
          title="Save your code on GitHub"
          link={{ href: "https://github.com", label: "Create a GitHub account →" }}
          screenshotLabel="GitHub new repository and first commit"
          screenshotAlt="Screenshot of creating a new GitHub repository and pushing code"
        >
          <p>
            <strong>GitHub</strong> stores your project in the cloud. Two terms
            to know:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Commit</strong> — saving a snapshot of your work (like
              clicking Save on a document).
            </li>
            <li>
              <strong>Push</strong> — uploading that snapshot to GitHub so it
              is backed up online.
            </li>
          </ul>
          <p>Follow these steps:</p>
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              Create a free account at{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline underline-offset-4"
              >
                github.com
              </a>
              .
            </li>
            <li>
              Click <strong>New repository</strong>, give it a name, and create
              it (leave it empty — no README needed).
            </li>
            <li>
              In Cursor, open the terminal and run these commands one at a time
              (replace the URL with your repo&apos;s URL):
            </li>
          </ol>
          <CodeBlock label="Git commands">
            {`git init
git add .
git commit -m "Initial commit: my first AI-built website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main`}
          </CodeBlock>
          <p>
            You can also use Cursor&apos;s Source Control panel (the branch icon
            on the left) to commit and push with buttons instead of commands.
          </p>
        </StepSection>

        <StepSection
          id="step-4"
          stepNumber={4}
          title="Publish on Vercel"
          link={{ href: "https://vercel.com", label: "Sign up on Vercel →" }}
          screenshotLabel="Vercel import project and successful deployment"
          screenshotAlt="Screenshot of importing a GitHub repo on Vercel and seeing a live deployment URL"
        >
          <p>
            <strong>Vercel</strong> turns your GitHub project into a live
            website with a public URL like{" "}
            <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm">
              your-project.vercel.app
            </code>
            .
          </p>
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              Go to{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline underline-offset-4"
              >
                vercel.com
              </a>{" "}
              and sign up using your GitHub account.
            </li>
            <li>
              Click <strong>Add New Project</strong> and import the repository
              you pushed in Step 3.
            </li>
            <li>
              Vercel detects Next.js automatically — click{" "}
              <strong>Deploy</strong>.
            </li>
            <li>
              Wait about a minute, then open your live URL and share it with
              anyone.
            </li>
          </ol>
          <p>
            Every time you push changes to GitHub, Vercel will automatically
            update your live site. No extra steps needed.
          </p>
        </StepSection>

        <WorkflowWalkthrough />
        <TipsSection />
      </main>
      <Footer />
    </>
  );
}
