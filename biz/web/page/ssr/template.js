export default ({ body }) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
        </head>
        
        <body>
          <div id="root">${body}</div>
          <script type="text/javascript" src=".././web/bizA/bizA.js" charset="utf-8"></script>
        </body>
      </html>
    `;
};