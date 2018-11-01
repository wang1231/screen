<template>
	<div class="mainBox">
		<chart-header></chart-header>
		<chart-content></chart-content>
		<chart-footer></chart-footer>
	</div>
</template>

<script>
  import chartHeader from './chartHeader'
  import chartContent from './chartContent'
  import chartFooter from './chartFooter'

  export default {
		components: {
			chartHeader,
			chartContent,
			chartFooter
		}
  }
</script>

<style scoped>
    .mainBox{
      background: url('./images/bg.png');
    }
</style>
