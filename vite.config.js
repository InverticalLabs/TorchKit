import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

const files = [
    'resources/styles/app.css',
    'resources/scripts/app.js',
];

export default defineConfig({
    plugins : [
        laravel({
            input   : files,
            refresh : true,
        }),
    ],
});