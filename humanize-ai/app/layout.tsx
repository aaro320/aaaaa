import './globals.css';
import type { ReactNode } from 'react';
export const metadata={title:'HumanizeAI',description:'A thoughtful AI writing editor'};
export default function Layout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}
