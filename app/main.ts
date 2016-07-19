import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';


bootstrap(AppComponent);


/* async/await code sample */
// (async () => {
//   console.log(1);

//   await new Promise(resolve => {
//     setTimeout(() => {
//       console.log(2);
//       resolve();
//     }, 2000);
//   });

//   console.log(3);
// })();