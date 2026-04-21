<?php
/**
 * Plugin Name: IVE SEO Guardrails
 * Description: Forces explicit noindex/follow directives on technical and protected pages where the SEO metabox state is not emitted on the frontend.
 * Version: 1.0.0
 * Author: Codex
 */

if (! defined('ABSPATH')) {
	exit;
}

function ive_seo_guardrails_page_ids() {
	return array(912, 913, 914, 921);
}

function ive_seo_guardrails_should_noindex() {
	return is_page(ive_seo_guardrails_page_ids());
}

add_filter(
	'wp_robots',
	function ($robots) {
		if (! ive_seo_guardrails_should_noindex()) {
			return $robots;
		}

		return array(
			'noindex' => true,
			'follow'  => true,
		);
	},
	99
);

add_filter(
	'wp_headers',
	function ($headers) {
		if (ive_seo_guardrails_should_noindex()) {
			$headers['X-Robots-Tag'] = 'noindex, follow';
		}

		return $headers;
	},
	99
);
