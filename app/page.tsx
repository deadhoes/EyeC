import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-2xl font-bold">Eye</h1>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <a href="https://discord.com" target="_blank" rel="noreferrer">
              Discord
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground">Welcome to Eye 👁️</p>
      </main>
    </div>
  )
}
