<script>
	import logo from "$lib/assets/logo_footer.svg";
	import {
		IconBrandFacebookFilled,
		IconBrandLinkedin,
		IconBrandTwitterFilled,
		IconBrandInstagram,
		IconBrandYoutubeFilled,
		IconBrandFlickr,
	} from "@tabler/icons-svelte";
</script>

<div class="bg-white dark:bg-[#1C1B21] text-[15px] py-6">
	<div class="container">
		<div class="flex items-center justify-between border-b dark:border-[#333] py-7">
			<img src={logo} alt="logo" />
			<button class="px-8 py-3 bg-[#961CA5] text-white rounded-lg z-50">REGISTER</button>
		</div>
		<div class="flex flex-col sm:flex-row justify-between gap-6 py-7">
			<div class="text-justify sm:max-w-[360px]">
				CIO Africa serves the enterprise community of CIOs and senior technology decision-makers with peer insight and expertise on Business Strategy,
				Innovation and Leadership. CIO attracts the highest concentration of enterprise CIOs and business technology executives of any media brand,
				reaching over one million.
			</div>
			<div class="flex flex-col gap-y-2">
				<a href="/">Advertising</a>
				<a href="/">Services</a>
				<a href="/">About us</a>
				<a href="/">Contact us</a>
			</div>
			<div>
				<div class="flex sm:grid sm:grid-cols-2 gap-6">
					<IconBrandFacebookFilled size={24} />
					<IconBrandTwitterFilled size={24} />
					<IconBrandLinkedin size={24} />
					<IconBrandInstagram size={24} />
					<IconBrandYoutubeFilled size={24} />
					<IconBrandFlickr fill="#1C1B21" size={24} />
				</div>
			</div>
		</div>
		<div class="flex flex-col sm:flex-row justify-between text-[#424242] dark:text-[#F9F9F9] gap-6 py-7">
			<p class="opacity-50">© 2024 CIO Africa. All rights reserved.</p>
			<div class="flex justify-between sm:gap-12">
				<p>Terms & Conditions</p>
				<p>Privacy Policy</p>
			</div>
		</div>
	</div>
</div>
