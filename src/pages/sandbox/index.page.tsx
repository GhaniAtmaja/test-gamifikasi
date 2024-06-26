import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Sandbox' />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <Typography as='h1' variant='j1'>
              Sandbox Component
            </Typography>
            <div className='mt-6'>
              <Typography as='h2' variant='h6'>
                Sandbox:
              </Typography>
              <div className='mt-2 flex flex-wrap justify-center gap-2'>
                {sandbox.map(({ title, route }) => (
                  <ButtonLink key={route} href={route} variant='outline'>
                    {title}
                  </ButtonLink>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

//#region  //*=========== Sandbox ===========
const sandbox = [
  {
    title: 'Typography',
    route: '/sandbox/typography',
  },
  {
    title: 'Colors',
    route: '/sandbox/colors',
  },
  {
    title: 'Form',
    route: '/sandbox/form',
  },
  {
    title: 'Searchable Select Form',
    route: '/sandbox/searchable-select-form',
  },
  {
    title: 'Text Link & Button',
    route: '/sandbox/text-button',
  },
  {
    title: 'Button',
    route: '/sandbox/button',
  },
  {
    title: 'Breadcrumb',
    route: '/sandbox/breadcrumb',
  },
  {
    title: 'Icon Button',
    route: '/sandbox/icon-button',
  },
  {
    title: 'React Query & Toast',
    route: '/sandbox/toast-rq',
  },
  {
    title: 'Modal',
    route: '/sandbox/modal',
  },
  {
    title: 'Dialog',
    route: '/sandbox/dialog',
  },
  {
    title: 'Table',
    route: '/sandbox/table',
  },
  {
    title: 'Tooltip',
    route: '/sandbox/tooltip',
  },
  {
    title: 'Mac Card',
    route: '/sandbox/mac-cards',
  },
  {
    title: 'Popover',
    route: '/sandbox/popover',
  },
  {
    title: 'Alert',
    route: '/sandbox/alert',
  },
  {
    title: 'Typography Alert',
    route: '/sandbox/typography-alert',
  },
  {
    title: 'Tag',
    route: '/sandbox/tag',
  },
  {
    title: 'Card',
    route: '/sandbox/card',
  },
];
//#endregion  //*======== Sandbox ===========
