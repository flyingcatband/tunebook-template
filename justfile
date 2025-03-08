# List all the things you can do with this justfile, with descriptions
help:
    @just --list

# Run the project for local development
dev:
    pnpm dev

alias setup := install
# Install all project dependencies
install:
    pnpm i

# Update all project dependencies
update-deps:
    pnpm update

# Build the project for production deployment
build:
    pnpm build

alias fmt := format
# Run the code formatter
format:
    pnpm format

# Run static analysis on the code
lint:
    pnpm lint
    pnpm check
