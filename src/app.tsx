import type { Component } from 'solid-js';
import { Link, useRoutes, useLocation } from '@solidjs/router';
import styles from "./app.module.css";

import { routes } from './routes';

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  return (
    <div class={styles.container}>
      <div class={styles.leftSection}>
        <div class={styles.loginBox}>
          <img src="Logo.png" alt="Logo" class={styles.logo} />
          <h2 class={styles.loginTitle}>Login</h2>
          <input type="text" placeholder="Username" class={styles.input} />
          <input type="password" placeholder="Password" class={styles.input} />
          <div class={styles.rememberMe}>
            <input type="checkbox" id="remember" />
            <label for="remember">Ingat Saya</label>
          </div>
          <button class={styles.loginButton}>Masuk</button>
          <p class={styles.signupPrompt}>
            Belum Punya Akun? <a href="/signup">Buat dulu dong!</a>
          </p>
        </div>
      </div>
      <div class={styles.rightSection}>
        <div class={styles.infoBox}>
          <h2>Apa itu KostKu?</h2>
          <p>
            KostKu memudahkan Anda menemukan dan menyewa kost dengan cepat.
            Temukan kost sesuai kebutuhan dan anggaran Anda, lihat foto dan
            ulasan, serta pesan langsung melalui aplikasi. KostKu, teman setia
            cari tempat tinggal nyaman.
          </p>
        </div>
        <div class={styles.imageBox}>
          <img src="path/to/image1.png" alt="People using KostKu" />
          <img src="path/to/image2.png" alt="People using KostKu" />
        </div>
      </div>
    </div>
  );
};

export default App;
