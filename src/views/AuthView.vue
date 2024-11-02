<template>
  <div class="form-container">
    <h2 class="form-title">Welcome</h2>
    <div class="form-group">
      <label for="email">Email:</label>
      <input
        type="email"
        v-model="email"
        id="email"
        required
        class="form-input"
        autocomplete="email"
      />
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input
        type="password"
        v-model="password"
        id="password"
        required
        class="form-input"
        autocomplete="current-password"
      />
    </div>
    <div class="button-container">
      <button
        type="button"
        @click.prevent="handleSignUp"
        class="submit-button success"
      >
        Sign Up
      </button>
      <button
        type="button"
        @click.prevent="handleLogin"
        class="submit-button primary"
      >
        Log In
      </button>
      <button
        type="button"
        @click.prevent="handleLogout"
        class="submit-button error"
      >
        Log Out
      </button>
    </div>
    <div v-if="message" class="success-message">{{ message }}</div>
  </div>
</template>

<script src="./AuthAssets/script/AuthViewScript.js"></script>

<style src="./AuthAssets/styles/style.css"></style>
