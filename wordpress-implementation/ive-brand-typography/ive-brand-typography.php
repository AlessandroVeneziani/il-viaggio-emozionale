<?php
/**
 * Plugin Name: IVE Brand Typography
 * Description: Applies Playfair Display 700 to H1-H4 while preserving the existing body font stack.
 * Version: 1.0.0
 * Author: Codex
 */

if (! defined('ABSPATH')) {
	exit;
}

function ive_brand_typography_inline_css() {
	$latin_font_url     = plugins_url('assets/fonts/playfair-display-700-latin.woff2', __FILE__);
	$latin_ext_font_url = plugins_url('assets/fonts/playfair-display-700-latin-ext.woff2', __FILE__);

	return "
@font-face {
	font-family: 'IVE Playfair Display';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src: url('{$latin_ext_font_url}') format('woff2');
	unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
	font-family: 'IVE Playfair Display';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src: url('{$latin_font_url}') format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body h1,
body h2,
body h3,
body h4 {
	font-family: 'IVE Playfair Display', 'Playfair Display', serif !important;
	font-style: normal;
	font-weight: 700 !important;
}
";
}

function ive_brand_typography_enqueue() {
	if (is_admin()) {
		return;
	}

	wp_register_style('ive-brand-typography', false, array(), '1.0.0');
	wp_enqueue_style('ive-brand-typography');
	wp_add_inline_style('ive-brand-typography', ive_brand_typography_inline_css());
}
add_action('wp_enqueue_scripts', 'ive_brand_typography_enqueue', 20);

function ive_brand_typography_preload_font() {
	if (is_admin()) {
		return;
	}

	$latin_font_url = plugins_url('assets/fonts/playfair-display-700-latin.woff2', __FILE__);
	echo '<link rel="preload" href="' . esc_url($latin_font_url) . '" as="font" type="font/woff2" crossorigin>' . "\n";
}
add_action('wp_head', 'ive_brand_typography_preload_font', 1);
