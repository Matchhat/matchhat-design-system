# MatchHat Design System

A reusable, scalable, and accessible design system for building consistent user interfaces across MatchHat products. Built with React, TypeScript, Tailwind CSS, and Storybook.

## Features

- **Component Library:** A comprehensive set of UI components (buttons, forms, modals, navigation, etc.)
- **Theming:** Easily customizable with Tailwind CSS.
- **Accessibility:** Components follow accessibility best practices.
- **Documentation:** Interactive documentation and examples via Storybook.
- **TypeScript Support:** Fully typed components for better developer experience.

## Getting Started

### Installation

Install the package using your preferred package manager:

```bash
npm install @matchhat/design-system
# or
yarn add @matchhat/design-system
# or
pnpm add @matchhat/design-system
```

### Usage

Import components into your project:

```tsx
import { Button, Input, Modal } from '@matchhat/design-system';

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Input placeholder="Type here..." />
      <Modal isOpen={true}>Hello, world!</Modal>
    </div>
  );
}
```

### Tailwind CSS

Make sure your project is set up with Tailwind CSS. You can customize the design system by extending the Tailwind config.

### Storybook

To view and interact with all components:

```bash
npm run storybook
```

## Folder Structure

```
src/
  components/
    ui/
      button/
      input/
      modal/
      ...
    form/
    ...
  stories/
  tailwind.css
  index.ts
```

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request.

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build the library
- `npm run storybook` – Launch Storybook
- `npm run lint` – Lint the codebase

## License

[MIT](LICENSE)

---

Made with ❤️ by the MatchHat team.