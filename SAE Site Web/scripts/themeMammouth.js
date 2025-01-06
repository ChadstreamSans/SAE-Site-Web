const buttonThemeChanger = document.querySelector('#buttonTheme');
console.log(buttonThemeChanger);

buttonThemeChanger.addEventListener('click', function() {
  const theme = document.querySelector('#theme');
  if (theme.href.includes('light')) {
    theme.href = theme.href.replace('light', 'dark');

    return ;
  }

  theme.href = theme.href.replace('dark', 'light');
});