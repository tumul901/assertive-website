module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicePage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Eyebrow.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$ServiceHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/services/ServiceHero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pillars.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SERVICES"].map((service)=>({
            slug: service.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SERVICES"].find((s)=>s.slug === slug);
    if (!service) return {};
    return {
        title: `${service.name} — Assertive Brand Communications`,
        description: service.blurb
    };
}
async function ServicePage({ params }) {
    const { slug } = await params;
    const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SERVICES"].find((s)=>s.slug === slug);
    if (!service) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const pillar = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLARS"].find((p)=>p.id === service.pillar);
    // imageFor resolves the real photo once services.ts sets one; until then
    // it applies services.ts's temporary DEMO_SERVICE_IMAGE borrow. Shown
    // beside the description below, not in the hero - see ServiceHero.tsx.
    const image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageFor"])(service);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$ServiceHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ServiceHero"], {
                        service: service,
                        pillar: {
                            id: pillar.id,
                            name: pillar.name,
                            ink: pillar.ink,
                            wash: pillar.wash
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
                        as: "section",
                        className: "bg-surface",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
                            className: image ? "grid gap-10 lg:grid-cols-[420px_1fr] lg:items-center lg:gap-16" : undefined,
                            children: [
                                image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                                    className: "relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-card",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: image.src,
                                        alt: image.alt,
                                        fill: true,
                                        sizes: "(max-width: 1024px) 100vw, 420px",
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                                    delay: image ? 0.08 : 0,
                                    className: image ? undefined : "mx-auto max-w-[68ch]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-body-lg text-ink-body",
                                        children: service.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(RelatedServices, {
                        current: service,
                        pillar: pillar
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
                        as: "section",
                        className: "bg-surface",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                                className: "flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-h2 text-ink",
                                                children: [
                                                    "Ready to talk about ",
                                                    service.name,
                                                    "?"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-body-lg mt-3 max-w-[46ch] text-ink-body",
                                                children: "Tell us what you have in mind and you will get a straight answer, not a template."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                        href: "/#enquiry",
                                        variant: "primary",
                                        children: "Send an Enquiry"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/[slug]/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
// Weddings & Social has exactly one service (see services.ts), so this
// renders nothing there rather than a section with an empty grid under it.
function RelatedServices({ current, pillar }) {
    const others = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SERVICES"].filter((s)=>s.pillar === pillar.id && s.slug !== current.slug);
    if (others.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
        as: "section",
        className: "bg-surface",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Eyebrow"], {
                            className: pillar.ink,
                            children: [
                                "Also in ",
                                pillar.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-h2 mt-4 text-ink",
                            children: "Related Services"
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.08,
                    className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
                    children: others.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/services/${s.slug}`,
                            className: "group flex flex-col rounded-lg bg-surface-raised p-6 shadow-card transition-[translate,box-shadow] duration-[var(--dur-base)] ease-out-expo hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    className: `h-1 w-8 rounded-full ${pillar.mark}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-h3 mt-4 text-ink",
                                    children: s.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-small mt-2 text-ink-body",
                                    children: s.blurb
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `mt-auto inline-flex items-center gap-1.5 pt-5 font-medium ${pillar.ink}`,
                                    children: [
                                        "Learn more",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 14,
                                            "aria-hidden": "true",
                                            className: "transition-transform duration-[var(--dur-base)] ease-out-expo group-hover:translate-x-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, s.slug, true, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/services/[slug]/page.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/services/[slug]/page.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/layout/Footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-rsc] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-rsc] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pillars.ts [app-rsc] (ecmascript)");
// Not local copies. These were literals here until a number change had to
// be made in three files at once and this one was nearly missed - which is
// the exact failure contact.ts's own header warns about.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/contact.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const COMPANY_LINKS = [
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Clients",
        href: "/clients"
    },
    {
        label: "Careers",
        href: "/careers"
    },
    {
        label: "Contact",
        href: "/contact"
    }
];
// alt-only aria-labels; do NOT invent URLs (PLAN.md Phase 9) - href="#"
// stands in until the client supplies real social profile links.
const SOCIALS = [
    {
        label: "Facebook",
        icon: "/media/social-facebook.png"
    },
    {
        label: "Instagram",
        icon: "/media/social-instagram.png"
    },
    {
        label: "LinkedIn",
        icon: "/media/social-linkedin.png"
    },
    {
        label: "YouTube",
        icon: "/media/social-youtube.png"
    }
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: "var(--color-footer-bg)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
                className: "grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sm:col-span-2 lg:col-span-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo-on-dark.svg",
                                alt: "Assertive Brand Communications",
                                width: 207,
                                height: 50,
                                className: "h-9 w-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-small mt-4 max-w-[32ch]",
                                style: {
                                    color: "var(--color-footer-muted)"
                                },
                                children: "Event management and brand communications, based in Delhi."
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterColumn, {
                        heading: "Company",
                        children: COMPANY_LINKS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLink, {
                                href: l.href,
                                children: l.label
                            }, l.href, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterColumn, {
                        heading: "Services",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLARS"].map((pillar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLink, {
                                href: `/services#${pillar.id}`,
                                children: pillar.name
                            }, pillar.id, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterColumn, {
                        heading: "Contact",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_HREF"],
                                className: "text-small inline-flex items-center gap-2.5 transition-colors duration-[var(--dur-fast)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                                style: {
                                    color: "var(--color-footer-muted)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        size: 15,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE"]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMAIL"]}`,
                                className: "text-small inline-flex items-center gap-2.5 transition-colors duration-[var(--dur-fast)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                                style: {
                                    color: "var(--color-footer-muted)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        size: 15,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMAIL"]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex gap-2",
                                children: SOCIALS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        "aria-label": s.label,
                                        title: s.label,
                                        className: "flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-[var(--dur-fast)] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: s.icon,
                                            alt: "",
                                            width: 25,
                                            height: 25,
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    }, s.label, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: "1px solid var(--color-footer-hairline)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
                    className: "flex flex-col items-center gap-3 py-6 text-center sm:flex-row sm:justify-between sm:text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-small",
                            style: {
                                color: "var(--color-footer-muted)"
                            },
                            children: "© 2026 Assertive Brand Communications"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLink, {
                                    href: "/privacy",
                                    children: "Privacy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLink, {
                                    href: "/terms",
                                    children: "Terms"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function FooterColumn({ heading, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-small font-semibold uppercase tracking-[0.06em] text-white",
                children: heading
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
function FooterLink({ href, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "text-small w-fit transition-colors duration-[var(--dur-fast)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        style: {
            color: "var(--color-footer-muted)"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/Header.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/layout/Header.tsx", "Header");
}),
"[project]/src/components/layout/Header.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/layout/Header.tsx <module evaluation>", "Header");
}),
"[project]/src/components/layout/Header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/layout/Header.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/layout/Header.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/services/ServiceHero.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceHero",
    ()=>ServiceHero
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ServiceHero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ServiceHero() from the server but ServiceHero is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/services/ServiceHero.tsx", "ServiceHero");
}),
"[project]/src/components/services/ServiceHero.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceHero",
    ()=>ServiceHero
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ServiceHero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ServiceHero() from the server but ServiceHero is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/services/ServiceHero.tsx <module evaluation>", "ServiceHero");
}),
"[project]/src/components/services/ServiceHero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$ServiceHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/services/ServiceHero.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$ServiceHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/services/ServiceHero.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$ServiceHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ui/Button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
// outline + outline-offset draws the focus ring OUTSIDE the element, on
// the page background - so corporate-ink (4.53:1 on surface, PLAN.md
// section 2.3) stays a valid ring colour for every variant regardless of
// that variant's own fill.
const base = "group inline-flex items-center gap-2 font-medium transition-colors duration-[var(--dur-fast)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink";
const variants = {
    primary: "rounded-md bg-corporate-fill px-6 py-3 text-white hover:bg-corporate-ink",
    secondary: "text-ink",
    outline: "rounded-md border border-hairline px-5 py-2.5 text-ink hover:border-ink"
};
function Button({ variant = "primary", children, className, href, type = "button", onClick, disabled }) {
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(base, variants[variant], className);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            variant === "secondary" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative",
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-[var(--dur-fast)] group-hover:scale-x-100",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Button.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this) : children,
            variant === "primary" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block transition-transform duration-[var(--dur-fast)] ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                "aria-hidden": "true",
                children: "↗"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: classes,
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        disabled: disabled,
        className: classes,
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Container.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Container({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("mx-auto w-full max-w-[1440px] px-6 lg:px-10", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Container.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ui/Eyebrow.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eyebrow",
    ()=>Eyebrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Eyebrow({ children, className }) {
    // text-eyebrow is deliberately OUTSIDE cn()'s merge scope - see the
    // tailwind-merge warning in tokens.css. Passed through cn(), tailwind-
    // merge does not know text-eyebrow is a custom font-size token, treats
    // it as a text-COLOR utility (its fallback for any unrecognized
    // text-{word}), sees it "conflicting" with text-ink-muted, and silently
    // drops one of them - which is exactly what was happening here.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `text-eyebrow ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-ink-muted uppercase", className)}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Eyebrow.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ui/Reveal.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Reveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Reveal() from the server but Reveal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/Reveal.tsx", "Reveal");
}),
"[project]/src/components/ui/Reveal.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Reveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Reveal() from the server but Reveal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/Reveal.tsx <module evaluation>", "Reveal");
}),
"[project]/src/components/ui/Reveal.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ui/Section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Section({ children, className, id, as: Tag = "section" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        id: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("py-[clamp(64px,8vw,128px)]", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Section.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/data/contact.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * The one place the real contact details live. Extracted from Enquiry.tsx
 * when the WhatsApp widget needed the same phone number: two literals of
 * the same number in two files is a number that eventually disagrees with
 * itself, and the failing version is the one nobody is looking at.
 *
 * The phone number is the one the client supplied for this site (it
 * replaced the legacy site's published number); the email is the legacy
 * site's own. Neither is invented.
 */ __turbopack_context__.s([
    "EMAIL",
    ()=>EMAIL,
    "PHONE",
    ()=>PHONE,
    "PHONE_HREF",
    ()=>PHONE_HREF,
    "WHATSAPP_NUMBER",
    ()=>WHATSAPP_NUMBER
]);
const PHONE = "+91 95605 01246";
const PHONE_HREF = "tel:+919560501246";
const EMAIL = "info@assertivebrand.co.in";
const WHATSAPP_NUMBER = "919560501246";
}),
"[project]/src/lib/data/pillars.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PILLARS",
    ()=>PILLARS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-rsc] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.mjs [app-rsc] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.mjs [app-rsc] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$play$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorPlay$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor-play.mjs [app-rsc] (ecmascript) <export default as MonitorPlay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-rsc] (ecmascript) <export default as Heart>");
;
const PILLARS = [
    {
        id: "corporate",
        name: "Corporate & MICE",
        hue: 220,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        blurb: "Seamless, high-impact conferences, incentive trips and large-scale trade shows.",
        ink: "text-corporate-ink",
        mark: "bg-corporate-mark",
        wash: "bg-corporate-wash"
    },
    {
        id: "activation",
        name: "Brand Activation",
        hue: 26,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
        blurb: "Experiential marketing and BTL activations that bring brands to life where it matters.",
        ink: "text-activation-ink",
        mark: "bg-activation-mark",
        wash: "bg-activation-wash"
    },
    {
        id: "live",
        name: "Live & Entertainment",
        hue: 146,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
        blurb: "Concerts, televised shows, sports events and artist management.",
        ink: "text-live-ink",
        mark: "bg-live-mark",
        wash: "bg-live-wash"
    },
    {
        id: "content",
        name: "Content & Digital",
        hue: 79,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$play$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorPlay$3e$__["MonitorPlay"],
        blurb: "Strategic video, content and digital campaigns that carry the story onward.",
        ink: "text-content-ink",
        mark: "bg-content-mark",
        wash: "bg-content-wash"
    },
    {
        id: "weddings",
        name: "Weddings & Social",
        hue: 314,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        blurb: "Premium, detail-oriented weddings designed and delivered end to end, at any scale.",
        ink: "text-weddings-ink",
        mark: "bg-weddings-mark",
        wash: "bg-weddings-wash"
    }
];
}),
"[project]/src/lib/data/services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEMO_SERVICE_IMAGE",
    ()=>DEMO_SERVICE_IMAGE,
    "SERVICES",
    ()=>SERVICES,
    "imageFor",
    ()=>imageFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/work.ts [app-rsc] (ecmascript)");
;
const SERVICES = [
    // Brand Activation (5)
    {
        slug: "experiential-marketing",
        name: "Experiential Marketing",
        pillar: "activation",
        legacyUrl: "marketing.php",
        // Distilled from `description` below, not lifted from the legacy
        // one-liner grid - see the interface comment above.
        blurb: "Face-to-face brand experiences that cut through digital noise and build real connection.",
        description: "In a world saturated with digital content and advertisements, experiential marketing offers a powerful way to cut through the noise by creating meaningful, face-to-face interactions between brands and consumers. Assertive Brand Communication brings brands to life, enabling people to experience their values, personality, and products in a dynamic and engaging setting. Whether through live events, brand activations, or immersive pop-ups, experiential marketing invites consumers to participate, interact, and form personal connections with the brand, resulting in experiences that are not just seen but felt. This deep emotional engagement is key to building long-term brand loyalty and driving authentic word-of-mouth promotion."
    },
    {
        slug: "btl-promotions-activations",
        name: "BTL Promotions & Activations",
        pillar: "activation",
        legacyUrl: "promotions-activations.php",
        blurb: "We help make intelligent and informed purchasing decisions for your customers.",
        description: "At Assertive Brand Communication, we excel in BTL (Below-The-Line) promotions and activations that drive direct engagement and boost brand visibility. Our team delivers creative and targeted campaigns, from concept development to execution, ensuring impactful interactions with your audience. We focus on maximizing reach and creating memorable experiences that enhance brand connection and drive results."
    },
    {
        slug: "brand-launches",
        name: "Brand Launches",
        pillar: "activation",
        legacyUrl: "brand-launches.php",
        blurb: "From press events to elegant invites, we innovate and showcase your brand.",
        description: "At Assertive Brand Communication, we excel at crafting impactful brand launches that introduce your brand to the market with a lasting impression. Our team combines strategic planning, creative design, and flawless execution to create memorable experiences that resonate with your target audience. From concept to completion, we handle every detail, ensuring your brand launch not only captures attention but also builds excitement and drives loyalty. Trust us to deliver a bold, innovative launch that positions your brand for success."
    },
    {
        slug: "audience-acquisition",
        name: "Audience Acquisition",
        pillar: "activation",
        legacyUrl: "audience-acquisition.php",
        // Distilled from `description` below - see the interface comment above.
        blurb: "Market research and targeted outreach that bring the right audience to your event.",
        description: "At Assertive Brand Communication, our approach to audience acquisition is designed to ensure optimal engagement and impact for every event. We employ a strategic blend of market research, targeted outreach, and data-driven insights to attract and retain a relevant audience. By leveraging our industry expertise and utilizing advanced analytics, we create tailored strategies that enhance event visibility, maximize attendance, and drive meaningful interactions. Our commitment to understanding audience needs and preferences allows us to deliver exceptional event experiences that achieve our clients' goals and exceed expectations."
    },
    {
        slug: "merchandising",
        name: "Merchandising",
        pillar: "activation",
        legacyUrl: "merchandising.php",
        blurb: "Create impactful brand merchandises to increase visibility and engagement.",
        description: "At Assertive Brand Communication, we specialize in merchandising for events, providing tailored solutions that enhance brand visibility and maximize engagement. Our team manages all aspects, from product selection and design to on-site sales and inventory management. We ensure a seamless integration of merchandising into your event, creating a memorable experience that drives both audience interaction and brand impact."
    },
    // Corporate & MICE (4)
    {
        slug: "corporate-events",
        name: "Corporate Events",
        pillar: "corporate",
        legacyUrl: "corporate-events.php",
        blurb: "Conferences are the ideal way to create a platform for networking.",
        description: "Corporate events are pivotal moments that bring together key stakeholders to align on goals, celebrate achievements, and foster a sense of community within a professional setting. Whether it's an annual meeting, a team-building retreat, or a client appreciation event, these occasions provide invaluable opportunities to enhance brand image, share knowledge, and strengthen relationships. At Assertive Brand Communication, we believe that with careful planning and attention to detail, corporate events can be transformed into memorable experiences that motivate employees, impress clients, and reinforce the company's vision and values. By creating an environment that encourages engagement and collaboration, Assertive Brand Communication helps drive business growth and build a stronger, more connected corporate culture."
    },
    {
        slug: "mice-and-logistics",
        name: "MICE and Logistics",
        pillar: "corporate",
        legacyUrl: "logistics.php",
        blurb: "Rewarding and motivating employees are essential for the growth of any company.",
        // PLACEHOLDER - written in-house, not extracted. See the interface
        // comment above: the legacy page's own paragraph is experiential-
        // marketing's copy, pasted in wholesale. No numbers anywhere, same
        // rule as work.ts's case-study copy - to be replaced wholesale once
        // real client copy exists.
        description: "At Assertive Brand Communication, we manage the MICE and logistics behind conferences, incentive trips and large-scale trade shows - venue sourcing, delegate travel, on-ground coordination and the dozens of moving parts a multi-day corporate gathering depends on. Our team plans for the schedule that will actually happen, not the one on paper, so speakers start on time and delegates are never the ones solving a logistics problem. The goal is the same one good MICE planning always has: an event substantial enough to matter to the people attending it, run so smoothly that none of the planning is visible."
    },
    {
        slug: "exhibition",
        name: "Exhibition",
        pillar: "corporate",
        legacyUrl: "exhibition.php",
        blurb: "Do you know what it takes to make your exhibitions impactful?",
        description: "At Assertive Brand Communication, we specialize in designing and managing impactful exhibitions that showcase your brand and engage your audience. Our team brings creativity and strategic planning to every project, ensuring your exhibition stands out and delivers a memorable experience. From booth design and setup to audience interaction and post-event analysis, we handle every detail to maximize your brand's visibility and impact. Partner with us to create an exhibition that effectively communicates your brand's message and drives meaningful connections."
    },
    {
        slug: "award-functions",
        name: "Award Functions",
        pillar: "corporate",
        legacyUrl: "award-fuctions.php",
        blurb: "Extend your organization's reach and influence through motivating award functions.",
        description: "At Assertive Brand Communication, we specialize in organizing awards functions that celebrate excellence and create memorable experiences. Our team handles every detail, from event planning and design to execution and production, ensuring a seamless and impactful event. With a focus on professionalism and creativity, we deliver award functions that honor achievements and enhance your brand's prestige. Partner with us to create a distinguished event that leaves a lasting impression."
    },
    // Live & Entertainment (4)
    {
        slug: "live-concerts",
        name: "Live Concerts",
        pillar: "live",
        legacyUrl: "live-concerts.php",
        blurb: "When you're looking for a crowd-pleasing event, live concerts are a surefire success.",
        description: "At Assertive Brand Communication, we create and manage live concerts that deliver unforgettable experiences and elevate your brand. From planning and staging to promotion and execution, our team ensures a seamless production that captivates audiences and highlights your brand's presence. With a commitment to excellence and creativity, we turn live concerts into spectacular events that leave a lasting impact."
    },
    {
        slug: "artist-management",
        name: "Artist Management",
        pillar: "live",
        legacyUrl: "artist-management.php",
        blurb: "From booking to promotions, our artist management service handles it all.",
        description: "At Assertive Brand Communication, we provide expert artists management services that ensure smooth and successful engagements. Our team handles all aspects, from bookings and negotiations to logistics and event coordination, allowing artists to focus on their craft. We are dedicated to delivering seamless experiences and maximizing opportunities, enhancing both the artist's and the client's objectives."
    },
    {
        slug: "televised-shows",
        name: "Televised Shows",
        pillar: "live",
        legacyUrl: "televised.php",
        blurb: "We are one of the few event management agencies to organize and manage televised shows.",
        description: "At Assertive Brand Communication, we excel in managing televised events that capture attention and deliver your brand's message to a wide audience. From planning and production to live broadcast, our team ensures a flawless execution that engages viewers and elevates your brand. With a focus on creativity and technical expertise, we create televised events that leave a lasting impression. Trust us to turn your vision into a dynamic, memorable broadcast."
    },
    {
        slug: "sports-events",
        name: "Sports Events",
        pillar: "live",
        legacyUrl: "sports-events.php",
        blurb: "We organize adrenaline-filled sports events with top-notch thrill and precision.",
        description: "At Assertive Brand Communication, we design and manage sports events that captivate audiences and enhance brand visibility. Our team oversees every detail, from event planning and logistics to execution and promotion, ensuring a dynamic and engaging experience. With a focus on precision and creativity, we deliver sports events that highlight your brand and create memorable moments for participants and spectators alike."
    },
    // Content & Digital (2)
    {
        slug: "digital-marketing",
        name: "Digital Marketing",
        pillar: "content",
        legacyUrl: "digital-marketing.php",
        blurb: "Innovative digital marketing strategies to increase brand visibility.",
        description: "At Assertive Brand Communication, we leverage digital marketing to amplify event impact and drive engagement. Our team crafts targeted strategies, including social media campaigns, email marketing, and online promotions, to boost event visibility and connect with your audience. We focus on maximizing reach and interaction, ensuring your event achieves its full potential in the digital landscape."
    },
    {
        slug: "video-production",
        name: "Video Production & Content Creation",
        pillar: "content",
        legacyUrl: "video-production.php",
        blurb: "Professional video production for capturing your brand's most memorable moments.",
        description: "At Assertive Brand Communication, we offer expert video production and content creation services that bring your brand's story to life. Our team handles every aspect, from concept development and scripting to filming and editing, ensuring high-quality, engaging content. We focus on creating impactful videos that resonate with your audience and enhance your brand's presence."
    },
    // Weddings & Social (1)
    {
        slug: "wedding-management",
        name: "Wedding Management",
        pillar: "weddings",
        legacyUrl: "wedding-management.php",
        blurb: "Comprising of a team of qualified and experienced Wedding Industry experts.",
        // "At Royal Rasm" in the extracted source -> corrected to Assertive.
        // See the interface comment above; nothing else in this paragraph
        // was rewritten.
        description: "Wedding management is the art of transforming a couple's dream day into a seamless and unforgettable experience. At Assertive Brand Communication, we ensure that every detail, from the initial planning stages to the final \"I do,\" is carefully orchestrated to reflect the couple's unique vision and style. Our wedding management services cover everything from venue selection, décor design, and vendor coordination to timeline management and guest experience. We focus on making every moment flow effortlessly, allowing the couple and their guests to fully enjoy the celebration without worrying about the logistics. With Assertive Brand Communication's expert guidance and meticulous attention to detail, we turn a once-in-a-lifetime event into a flawless and joyous occasion."
    }
];
const DEMO_SERVICE_IMAGE = true;
function imageFor(service) {
    if (service.image) return service.image;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const samePillar = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WORK"].find((w)=>w.pillar === service.pillar);
    if (samePillar) return {
        src: samePillar.image,
        alt: samePillar.alt
    };
    // No WORK entry in this pillar at all - borrow deterministically by
    // SLUG POSITION, not object identity. See the "matched on slug, not
    // identity" note on work.ts's own galleryFor: an RSC-boundary re-fetch
    // of `service` would break an indexOf(service) lookup here the same way.
    const i = Math.max(0, SERVICES.findIndex((s)=>s.slug === service.slug));
    const borrowed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WORK"][i % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WORK"].length];
    return {
        src: borrowed.image,
        alt: borrowed.alt
    };
}
}),
"[project]/src/lib/data/work.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEMO_FILL",
    ()=>DEMO_FILL,
    "WORK",
    ()=>WORK,
    "galleryFor",
    ()=>galleryFor
]);
const WORK = [
    {
        slug: "india-pod-day",
        title: "India Pod Day",
        client: "IVM Podcasts",
        pillar: "live",
        image: "/media/work/india-pod-day.webp",
        alt: "The Amazon Music India Pod Day stage, lit magenta, with seven armchairs set for a panel",
        gallery: [],
        note: "Stage, set and show management for the Amazon Music podcast showcase.",
        headline: "A Podcast Festival, Staged Like Live Television",
        problem: "Podcasting is an audio medium with no natural stage presence. India Pod Day had to work twice over - as a live event for the audience in the room, and as a set that would still read on camera in everything cut from it afterwards.",
        solution: "We built a panel set that holds up from every angle a camera could take it from, lit magenta so the brand reads even in a wide shot, and ran the day to broadcast timings so recording, audience changeover and stage resets never collided.",
        impact: "The showcase ran as one continuous programme rather than a series of separate recordings, and came away with a stage that photographed as well as it sounded."
    },
    {
        slug: "agenda-paschim",
        title: "Agenda Paschim",
        client: "News18 Network",
        pillar: "corporate",
        image: "/media/work/agenda-paschim.png",
        alt: "The News18 Agenda Paschim conclave set, a red and gold backdrop behind a panel seating arrangement",
        gallery: [],
        note: "Conclave set design and floor management for the News18 regional summit.",
        headline: "A Regional Conclave With National Polish",
        problem: "A news conclave lives or dies on its optics. Agenda Paschim needed a set carrying the authority of the network's national programming, built to a regional summit's schedule and travelling to its venue.",
        solution: "A modular red-and-gold set drawn from the channel's on-air identity, with a seating plan that keeps every wide shot populated and a floor process that moves speakers on and off between segments without breaking the recording.",
        impact: "The conclave held its published running order from first session to last, and the set carried the network's look consistently across every panel staged on it."
    },
    {
        slug: "achievers",
        title: "Achievers",
        client: "Cleartrip",
        pillar: "corporate",
        image: "/media/work/cleartrip-achievers.webp",
        alt: "The Achievers registration desk, staffed by four hosts in front of a purple branded backdrop",
        gallery: [],
        note: "Registration, hosting and on-ground delivery for the AgentBox partner awards.",
        headline: "An Awards Night That Starts At The Door",
        problem: "AgentBox partners arrive from across the country inside one narrow window. On a partner awards night the door is the first thing anyone experiences, and a queue there sets the tone for the whole evening.",
        solution: "A registration line built for throughput rather than decoration - credentials prepared ahead, four host positions working in parallel, and the branded backdrop placed so that even the queue reads as part of the event in photographs.",
        impact: "Guests moved from the door to their tables without a bottleneck, and the programme opened to a room that was already seated."
    },
    {
        slug: "india-drives",
        title: "India Drives",
        client: null,
        pillar: "live",
        image: "/media/work/india-drives.webp",
        alt: "Folk dancers in yellow and orange performing in front of a large illuminated LED stage",
        gallery: [],
        note: "Live performance programming and stage production.",
        headline: "Folk Tradition On A Broadcast Stage",
        problem: "The opening had to read as unmistakably Indian without tipping into tourism-brochure shorthand, on a stage whose scale and LED wall were built for a very different kind of act.",
        solution: "Live folk performance programmed against the lighting and screen cues rather than in front of them, so the choreography and the stage move as a single piece and the wall works as part of the costume, not as wallpaper behind it.",
        impact: "The opening set the register for everything that followed on the stage that night, and gave the event its most-used sequence of footage."
    },
    {
        slug: "wedding-social",
        title: "Wedding & Social",
        client: null,
        pillar: "weddings",
        image: "/media/work/wedding.webp",
        alt: "A large illuminated wedding set built as an ornate palace facade, with tiered seating in front",
        gallery: [],
        note: "Set construction, lighting and guest experience for a large-format wedding.",
        headline: "A Palace Built To Stand For One Night",
        problem: "The brief asked for a facade with the presence of a real building - at a scale that still had to be trucked in, built, lit, used and struck inside a single weekend.",
        solution: "A sectional palace set engineered around the load-in and lit to hold its detail all the way to the top of the frame, with tiered seating placed so guests read the whole facade from where they are sitting rather than only the middle of it.",
        impact: "The set carried the ceremony as its backdrop and the reception as its centrepiece, and came down on schedule the next morning."
    }
];
const DEMO_FILL = true;
function galleryFor(item) {
    const own = [
        {
            src: item.image,
            alt: item.alt
        },
        ...item.gallery
    ];
    if (!DEMO_FILL || own.length > 1) return own;
    /*
   * Matched on SLUG, not by identity. This runs inside a client component
   * whose items were handed over the server boundary, so they arrive as
   * fresh objects deserialized from the RSC payload - never the same
   * references this module's own WORK array holds. indexOf found nothing,
   * returned -1, and -1 % 4 is -1 in JS rather than 3, so the fill picked
   * an undefined entry and took the prerender down with it.
   */ const others = WORK.filter((w)=>w.slug !== item.slug);
    if (!others.length) return own;
    const at = Math.max(0, WORK.findIndex((w)=>w.slug === item.slug));
    const borrowed = [
        others[at % others.length],
        others[(at + 2) % others.length]
    ];
    return [
        ...own,
        ...borrowed.map((w)=>({
                src: w.image,
                alt: w.alt
            }))
    ];
}
}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "isValidEmail",
    ()=>isValidEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0yu1yxl._.js.map