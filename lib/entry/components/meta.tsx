import { Head } from "$fresh/src/runtime/head.ts";

interface MetaProps {
  title: string;
  canonical: string;
}

export function Meta({ title, canonical }: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="noindex" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />
      <link
        rel="canonical"
        href={`https://erictherobot-deno-app-1.deno.dev${canonical}}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.webmanifest" />
      {/* Currently not needed to update the PWA but left here for reference */}
      {/* <script type="module">
        import
        'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate/dist/pwa-update.js';
        const el = document.createElement('pwa-update');
        document.body.appendChild(el);
      </script> */}
      <style>{cssStyles()}</style>
    </Head>
  );
}

function cssStyles() {
  return `
    /*TODO: Move to css file when a package mechanism for Fresh is available */
    /*region common*/
    body {
        height: 100vh;
    }
    
    .page {
        height: 100%;
        display: grid;
        grid-template-rows: 100px 1fr 100px;
        row-gap: 25px;
    }
    
    .header {
        display: grid;
        grid-template-columns: auto 1fr;
        column-gap: 5px;
        align-items: center;
        padding: 20px 0;
    }
    
    .header .title {
        font-size: 24px;
        font-weight: bold;
    }
    
    .deno-logo {
        height: 65px;
        width: 65px;
    }
    
    .footer {
        margin: auto;
    }
    
    .resize-none {
        resize: none;
    }
    /*endregion*/
    
    /*region entriesManagement*/
    .entries-management {
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 25px;
    }
    
    .entries-management .panel {
        padding: 24px 9px;
        border: solid var(--bs-border-color) 1px;
        border-radius: var(--bs-border-radius);
    }
    
    .entries-management .left-panel-container {
        height: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        grid-row-gap: 24px;
    }
    
    .entries-management .action-container {
        display: grid;
        grid-template-columns: 1fr auto;
        column-gap: 24px;
        padding: 0 15px;
    }
    
    .entries-management .entries-list-container {
        position: relative;
    }
    
    .entries-management .entries-list-container .entries-list {
        position: absolute;
    }
    
    .entries-management .search-form-control {
        max-width: 290px;
    }
    /*endregion*/
    
    /*region entriesList*/
    .entries-list {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        padding: 0 15px;
    }
    
    .entries-list .table {
        table-layout: fixed;
    }
    
    .entries-list .table-header {
        position: sticky;
        top: 0;
    }
    
    .entries-list .empty-table {
        display: grid;
        height: 100%;
    }
    
    .entries-list .empty-table .info-text {
        align-self: center;
        justify-self: center;
        margin-bottom: 78px;
    }
    
    .entries-list .table-row {
        cursor: pointer;
    }
    
    .entries-list .select-col {
        width: 35px;
    }
    
    .entries-list .type-col {
        width: 140px;
    }
    /*endregion*/
    
    /*region createEntryModal*/
    .create-entry-modal .value-form-control {
        min-height: 210px;
    }
    /*endregion*/
    
    /*region entryDetail*/
    .entry-detail,
    .entry-detail-empty {
        display: grid;
        height: 100%;
    }
    
    .entry-detail {
        grid-template-rows: auto 1fr;
        row-gap: 24px;
    }
    
    .entry-detail-empty .info-text {
        align-self: center;
        justify-self: center;
    }
    
    .entry-detail .header,
    .entry-detail .form {
        padding: 0 15px;
    }
    
    .entry-detail .header {
        display: grid;
        grid-template-columns: 1fr auto;
    }
    
    .entry-detail .header .h5 {
        margin-bottom: 0;
    }
    
    .entry-detail .remove-btn {
        display: inline-grid;
        align-items: center;
        justify-items: center;
    }
    
    .entry-detail .form {
        display: grid;
        grid-template-rows: auto auto 1fr auto;
    }
    
    .entry-detail .value-form-control {
        height: calc(100% - 50px);
    }
    /*endregion*/
              `;
}
