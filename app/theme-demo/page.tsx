'use client';

import { useState } from 'react';

export default function ThemeDemo() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground transition-colors">
        <div className="max-w-4xl mx-auto p-8 space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Theme System Demo</h1>
            <button
              onClick={() => setIsDark(!isDark)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Toggle {isDark ? 'Light' : 'Dark'} Mode
            </button>
          </div>

          <div className="space-y-4">
            <h2>Color Palette</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-primary text-primary-foreground rounded-lg">
                <p className="font-medium">Primary</p>
                <p className="text-sm opacity-80">primary-foreground</p>
              </div>

              <div className="p-4 bg-secondary text-secondary-foreground rounded-lg">
                <p className="font-medium">Secondary</p>
                <p className="text-sm opacity-80">secondary-foreground</p>
              </div>

              <div className="p-4 bg-muted text-muted-foreground rounded-lg">
                <p className="font-medium">Muted</p>
                <p className="text-sm opacity-80">muted-foreground</p>
              </div>

              <div className="p-4 bg-accent text-accent-foreground rounded-lg">
                <p className="font-medium">Accent</p>
                <p className="text-sm opacity-80">accent-foreground</p>
              </div>

              <div className="p-4 bg-destructive text-destructive-foreground rounded-lg">
                <p className="font-medium">Destructive</p>
                <p className="text-sm opacity-80">destructive-foreground</p>
              </div>

              <div className="p-4 bg-card text-card-foreground border border-border rounded-lg">
                <p className="font-medium">Card</p>
                <p className="text-sm opacity-80">card-foreground</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2>Typography</h2>
            <div className="space-y-2">
              <h1>Heading 1 - Default styles applied</h1>
              <h2>Heading 2 - Default styles applied</h2>
              <h3>Heading 3 - Default styles applied</h3>
              <h4>Heading 4 - Default styles applied</h4>
              <p>Paragraph text - Default styles applied</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2>Border Radius Scale</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-muted rounded-sm">
                <p className="font-medium">rounded-sm</p>
              </div>
              <div className="p-4 bg-muted rounded-md">
                <p className="font-medium">rounded-md</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-medium">rounded-lg</p>
              </div>
              <div className="p-4 bg-muted rounded-xl">
                <p className="font-medium">rounded-xl</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2>Form Elements</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                Submit
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h2>Chart Colors (for data visualization)</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="h-20 bg-chart-1 rounded-lg"></div>
              <div className="h-20 bg-chart-2 rounded-lg"></div>
              <div className="h-20 bg-chart-3 rounded-lg"></div>
              <div className="h-20 bg-chart-4 rounded-lg"></div>
              <div className="h-20 bg-chart-5 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
