module.exports = [
"[project]/src/components/brand/PinwheelMark.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PinwheelMark",
    ()=>PinwheelMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/petals.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function PinwheelMark({ rotation = 0, filled = [], // Derived from the ink token so the outline follows the theme without
// the caller having to know which theme is active.
hollowColor = "color-mix(in oklab, var(--color-ink) 30%, transparent)", strokeWidth = 9, className, duration = 0.9 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARK_VIEWBOX"],
        className: className,
        "aria-hidden": "true",
        overflow: "visible",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].g, {
            animate: {
                rotate: rotation
            },
            transition: {
                duration,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            },
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PETALS"].map((petal)=>{
                const isFilled = filled.includes(petal.id);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: petal.body,
                            fill: "none",
                            stroke: hollowColor,
                            strokeWidth: strokeWidth,
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/brand/PinwheelMark.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: petal.head.cx,
                            cy: petal.head.cy,
                            rx: petal.head.rx,
                            ry: petal.head.ry,
                            transform: petal.head.transform,
                            fill: "none",
                            stroke: hollowColor,
                            strokeWidth: strokeWidth
                        }, void 0, false, {
                            fileName: "[project]/src/components/brand/PinwheelMark.tsx",
                            lineNumber: 65,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].g, {
                            initial: false,
                            animate: {
                                opacity: isFilled ? 1 : 0
                            },
                            transition: {
                                duration: duration * 0.7,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: petal.body,
                                    fill: petal.color
                                }, void 0, false, {
                                    fileName: "[project]/src/components/brand/PinwheelMark.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: petal.head.cx,
                                    cy: petal.head.cy,
                                    rx: petal.head.rx,
                                    ry: petal.head.ry,
                                    transform: petal.head.transform,
                                    fill: petal.color
                                }, void 0, false, {
                                    fileName: "[project]/src/components/brand/PinwheelMark.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/brand/PinwheelMark.tsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this)
                    ]
                }, petal.id, true, {
                    fileName: "[project]/src/components/brand/PinwheelMark.tsx",
                    lineNumber: 55,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/brand/PinwheelMark.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/brand/PinwheelMark.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Eyebrow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ThemeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MegaMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/MegaMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pillars.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-dropdown.ts [app-ssr] (ecmascript)");
"use client";
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
;
const CLIENTS_LINKS = [
    {
        label: "Client Information",
        href: "/clients"
    },
    {
        label: "Vendor Registration",
        href: "/vendor-registration"
    }
];
const CONTACT_LINKS = [
    {
        label: "Contact Information",
        href: "/contact"
    },
    {
        label: "Client Query",
        href: "/client-query"
    }
];
function NavLink({ href, children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const active = pathname === href;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "text-base relative inline-block py-2 font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
        children: [
            children,
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -bottom-2 left-0 h-0.5 w-full bg-corporate-mark",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function SimpleDropdown({ label, links }) {
    const { open, rootProps, triggerProps, closeNow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDropdown"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ...rootProps,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-base inline-flex items-center gap-1 font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                ...triggerProps,
                children: [
                    label,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 16,
                        "aria-hidden": "true",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("transition-transform duration-[var(--dur-fast)]", open && "rotate-180")
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-lg border border-hairline bg-surface-raised p-3 shadow-bar",
                children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: l.href,
                        onClick: closeNow,
                        className: "text-body block rounded-sm px-3 py-2 text-ink hover:bg-surface",
                        children: l.label
                    }, l.href, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
function Header() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hamburgerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    // Keeps --header-h (tokens.css) equal to this header's TRUE rendered
    // height at all times, including mid-transition as it shrinks from
    // 110px to 84px on scroll. HeroSequence's pinned stage reads this
    // variable to reserve exactly this much space and never sit under it.
    // A ResizeObserver rather than recomputing on the scroll/resize events
    // this component already listens to, so the reservation tracks the
    // header's own 420ms height transition smoothly instead of jumping.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = headerRef.current;
        if (!el) return;
        const sync = ()=>{
            document.documentElement.style.setProperty("--header-h", `${el.getBoundingClientRect().height}px`);
        };
        sync();
        const ro = new ResizeObserver(sync);
        ro.observe(el);
        return ()=>ro.disconnect();
    }, []);
    // Lock background scroll while the mobile panel is open.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mobileOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return ()=>{
            document.body.style.overflow = prev;
        };
    }, [
        mobileOpen
    ]);
    // Focus trap + Escape-to-close for the mobile panel (PLAN.md section 3A).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mobileOpen) return;
        const panel = panelRef.current;
        if (!panel) return;
        const focusables = ()=>Array.from(panel.querySelectorAll('a[href], button:not([disabled])'));
        focusables()[0]?.focus();
        function onKeyDown(e) {
            if (e.key === "Escape") {
                setMobileOpen(false);
                hamburgerRef.current?.focus();
                return;
            }
            if (e.key !== "Tab") return;
            const items = focusables();
            if (items.length === 0) return;
            const first = items[0];
            const last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
        document.addEventListener("keydown", onKeyDown);
        return ()=>document.removeEventListener("keydown", onKeyDown);
    }, [
        mobileOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: headerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("sticky top-0 z-50 h-[72px] border-b border-hairline bg-surface transition-[height,box-shadow] duration-[var(--dur-base)] lg:h-[110px]", scrolled && "lg:h-[84px] lg:shadow-bar"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                className: "flex h-full items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-corporate-ink",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo-mark.png",
                                alt: "",
                                width: 45,
                                height: 44,
                                className: "h-9 w-auto lg:h-10",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex flex-col leading-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-ink lg:text-xl",
                                        children: "Assertive"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-small tracking-[0.04em] text-ink-muted",
                                        children: "Brand Communications"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-8 lg:flex",
                        "aria-label": "Primary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                href: "/",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                href: "/about",
                                children: "About Us"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MegaMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MegaMenu"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleDropdown, {
                                label: "Clients",
                                links: CLIENTS_LINKS
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleDropdown, {
                                label: "Contact",
                                links: CONTACT_LINKS
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {
                                className: "h-10 w-10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    href: "/client-query",
                                    variant: "outline",
                                    children: "Client Query ↗"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: hamburgerRef,
                        type: "button",
                        className: "inline-flex h-10 w-10 items-center justify-center rounded-md text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink lg:hidden",
                        "aria-expanded": mobileOpen,
                        "aria-label": mobileOpen ? "Close menu" : "Open menu",
                        onClick: ()=>setMobileOpen((v)=>!v),
                        children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 24,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 206,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 24,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 206,
                            columnNumber: 62
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    ref: panelRef,
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "Mobile navigation",
                    className: "fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-surface lg:hidden",
                    initial: {
                        opacity: 0,
                        y: reduce ? 0 : -8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: reduce ? 0 : -8
                    },
                    transition: {
                        duration: reduce ? 0.01 : 0.42,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ]
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                        className: "flex flex-col gap-8 py-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        onClick: ()=>setMobileOpen(false),
                                        className: "text-h3 text-ink",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        onClick: ()=>setMobileOpen(false),
                                        className: "text-h3 text-ink",
                                        children: "About Us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 228,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PILLARS"].map((pillar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm mb-2 font-semibold", pillar.ink),
                                                    children: pillar.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "flex flex-col gap-2",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES"].filter((s)=>s.pillar === pillar.id).map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/services/${service.slug}`,
                                                                onClick: ()=>setMobileOpen(false),
                                                                className: "text-body text-ink-body",
                                                                children: service.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, service.slug, false, {
                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, pillar.id, true, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 236,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 233,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                        children: "Clients"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this),
                                    CLIENTS_LINKS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: l.href,
                                            onClick: ()=>setMobileOpen(false),
                                            className: "text-body text-ink",
                                            children: l.label
                                        }, l.href, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 255,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 265,
                                        columnNumber: 17
                                    }, this),
                                    CONTACT_LINKS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: l.href,
                                            onClick: ()=>setMobileOpen(false),
                                            className: "text-body text-ink",
                                            children: l.label
                                        }, l.href, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                href: "/client-query",
                                variant: "primary",
                                className: "justify-center",
                                children: "Client Query ↗"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 273,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 223,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 212,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/MegaMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MegaMenu",
    ()=>MegaMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pillars.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-dropdown.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function MegaMenu() {
    const { open, rootProps, triggerProps, closeNow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDropdown"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ...rootProps,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-base inline-flex items-center gap-1 font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                ...triggerProps,
                children: [
                    "Services",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 16,
                        "aria-hidden": "true",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("transition-transform duration-[var(--dur-fast)]", open && "rotate-180")
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/MegaMenu.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/MegaMenu.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-full z-50 mt-3 w-[min(90vw,880px)] -translate-x-1/2 rounded-lg border border-hairline bg-surface-raised p-8 shadow-bar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-5 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PILLARS"].map((pillar)=>{
                        const services = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES"].filter((s)=>s.pillar === pillar.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mb-3 h-[3px] w-8", pillar.mark)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/MegaMenu.tsx",
                                    lineNumber: 38,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm mb-3 font-semibold", pillar.ink),
                                    children: pillar.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/MegaMenu.tsx",
                                    lineNumber: 39,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/services/${service.slug}`,
                                                className: `text-small ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hover:underline", pillar.ink)}`,
                                                onClick: closeNow,
                                                children: service.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/MegaMenu.tsx",
                                                lineNumber: 43,
                                                columnNumber: 25
                                            }, this)
                                        }, service.slug, false, {
                                            fileName: "[project]/src/components/layout/MegaMenu.tsx",
                                            lineNumber: 42,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/MegaMenu.tsx",
                                    lineNumber: 40,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, pillar.id, true, {
                            fileName: "[project]/src/components/layout/MegaMenu.tsx",
                            lineNumber: 37,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/MegaMenu.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/MegaMenu.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/MegaMenu.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/AboutPortal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutPortal",
    ()=>AboutPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-template.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-motion-styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/petals.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
/*
 * ABOUT US - "The Portal", carried over from the /proto/portal concept.
 *
 * The heading is drawn twice, in one SVG, in perfect register:
 *   1. as BLACK text inside an SVG <mask>, over a WHITE full-stage rect.
 *      Black in a luminance mask = hidden, so every letterform punches a
 *      HOLE through the surface-coloured sheet covering the photograph.
 *   2. as INK text painted on top, filling those holes exactly.
 *
 * At rest the two cancel and it reads as an ordinary ink heading on the
 * page. Then, in order:
 *
 *   ink dissolves   you are suddenly looking THROUGH the letterforms at
 *                   the brand's own colour field
 *   the zoom        both layers scale about the viewport centre together,
 *                   up to 44x, until the letters have swallowed the screen
 *   the sheet goes  and the field is all there is
 *   the field recedes behind a surface scrim, and the three sentences rise
 *                   out of it, one per discipline colour
 *
 * WHY A COLOUR FIELD AND NOT A PHOTOGRAPH. This was first built falling
 * into a ballroom photograph (media/hall.png, since deleted - it had no
 * other use). Two problems, one fatal. The soft one: a generic stock
 * ballroom says nothing this agency specifically does. The fatal one: it
 * was 811x517, so full-bleed on a 1440px stage it was already being
 * upscaled about 1.8x before the portal magnified anything.
 * The field below is pure CSS, so it is resolution-independent - it stays
 * exactly as clean at 44x as at rest - it is built from the five petal
 * colours of the mark, and it costs no bytes. Falling through the words
 * into the brand's own spectrum is also simply a better idea than falling
 * into a photograph of someone else's venue.
 *
 * WHY SVG AND NOT background-clip:text - the holes have to mask the field
 * while the SAME glyphs are painted on top in ink at identical geometry.
 * Two DOM elements with clamp() sizes drift by a pixel or two under
 * sub-pixel rounding, which shows as a coloured fringe at rest. One SVG,
 * one font-size, one transform: they cannot drift.
 *
 * WHY THE FONT SIZE IS MEASURED, NOT GUESSED - see the probe below.
 * PLAN.md section 3.5 records hand-estimating a headline width being wrong
 * by a wide margin.
 *
 * WHY THE SCRIM EXISTS. The copy cannot sit on the bare field. Every ink
 * and mark token was solved against --color-surface, not against five
 * saturated primaries, and the hero already had to clear its flood wash
 * for exactly this reason (see the floodOpacity note in HeroSequence.tsx).
 * So the field is the TRANSITION material: full strength while you fall
 * into it, then dropped behind surface at 92% before a single word
 * arrives. Even the ghost that survives that is not free - it is what
 * pushed the accent rules off -mark and onto -ink; see STRATA below.
 *
 * REDUCED MOTION / NO JS are handled in CSS and never by returning a
 * different tree - useReducedMotion() is false during SSR, so branching
 * on it renders one structure on the server and another on the client
 * (a real hydration mismatch, see HeroSequence.tsx). In both degraded
 * modes the portal machinery is hidden outright and the copy layer -
 * which holds the real <h2> and all three sentences - is shown flowed.
 * .pin-stage / .pin-layer / .pin-portal do that work; see globals.css
 * and the noscript block in layout.tsx.
 */ const HEADING = "About Us";
/*
 * How far the masking sheet bleeds past the stage on each side, as a
 * fraction. Insurance against preserveAspectRatio letterboxing - the long
 * note beside the sheet explains what that looked like when it happened.
 *
 * THE NUMBER IS A PERFORMANCE FIGURE, not a taste one. This started at a
 * full 3x (one whole stage of margin on every side), which is 9x the AREA
 * of a luminance mask that the browser re-rasterizes on every frame the
 * zoom transform changes. At a 1440x788 stage that is a ~10 megapixel
 * offscreen buffer per frame, and it measured exactly as you would expect:
 * scrolling into this section ran 26-35ms per frame (about 30fps) from
 * p=0.0 to p=0.5, then snapped back to a clean 17ms at p>=0.6 - which is
 * precisely where sheetOpacity fades the sheet out and the mask stops
 * being painted at all. The zoom was never the expensive part.
 *
 * 8% keeps the same guarantee for any plausible sub-pixel or mid-
 * transition mismatch while cutting the rasterized area by about 6.7x.
 * Raising it back toward 1.0 will bring the stutter back; if a real
 * letterboxing gap ever reappears, fix the viewBox measurement rather
 * than widening this.
 */ const BLEED = 0.08;
const BLEED_SPAN = 1 + BLEED * 2;
/*
 * The client's About copy, verbatim. Three sentences that happen to be
 * three parallel statements - who we are, what we do, how we do it -
 * which is why they get parallel treatment rather than one prose block.
 * Each takes a discipline colour from the mark.
 *
 * USES -ink, NOT -mark, AND THAT IS MEASURED. -mark is the token solved
 * to 3:1 for exactly this job, but it is solved against the BARE surface,
 * and these rules do not sit on the bare surface - they sit on surface
 * blended with what is left of the colour field. Measured on the real
 * composite, all three came in at 2.67-2.77:1 against a 3:1 requirement;
 * on bare surface the same teal is 3.14:1, so the ghost alone costs about
 * 0.4 and there was never any headroom to lose. -ink is solved to 4.5:1,
 * which leaves enough slack to survive the composite in both themes.
 * This is the same failure mode as the hero's flood wash - see the
 * floodOpacity note in HeroSequence.tsx.
 */ const STRATA = [
    {
        key: "who",
        rule: "bg-corporate-ink",
        text: "Assertive Brand Communications is an event management company dedicated to crafting unforgettable experiences that elevate brands and engage audiences."
    },
    {
        key: "what",
        rule: "bg-activation-ink",
        text: "From corporate conferences to product launches, gala dinners to experiential marketing activations, we specialize in conceptualizing, planning, and executing events that leave a lasting impact."
    },
    {
        key: "how",
        rule: "bg-live-ink",
        text: "With a focus on creativity, precision, and client satisfaction, we blend innovation with meticulous attention to detail to deliver seamless and memorable events tailored to each client’s unique objectives and vision."
    }
];
/*
 * What lies behind the letters: the mark's own colour rotation.
 *
 * PETALS is ordered clockwise from twelve o'clock (see petals.ts - that
 * order is measured off the artwork, not alphabetical), so sweeping those
 * same five colours through a conic gradient reproduces the pinwheel's
 * actual rotation as light. The faint spokes where the stops meet are the
 * point, not an artefact.
 *
 * Uses `authored` - the raw artwork hex - rather than `color`, which is a
 * theme-aware token that gets lightness-corrected for the bone page.
 * Correction is right for a petal that has to hold 3:1 as a small shape on
 * the surface; here the colours ARE the surface, at full stage size, and
 * they want to be the vivid artwork values in both themes.
 *
 * An earlier version placed five separate radial blobs around the edges.
 * It failed for a specific reason worth keeping: the blobs left the
 * CENTRE - which is exactly where the letterforms are - falling back to
 * the dark base, so the holes read as near-black smudges with a bit of
 * colour at the extremes. A conic sweep has no gap to fall into.
 *
 * TWO DELIBERATE MOVES, both learned by looking at it full-screen:
 *
 * 1. The conic origin sits BELOW the stage (50% 112%). With it inside the
 *    frame you see the singularity where all five stops converge, and the
 *    whole thing stops being a brand field and starts being a colour
 *    picker. Pushed off the bottom edge, what is left is a fan of colour
 *    rising from the floor - which, for an events agency, happens to look
 *    exactly like uplighting.
 * 2. The stops are therefore SQUEEZED into the arc the WORD actually
 *    subtends from that origin, not spread evenly around all 360deg.
 *    Measured rather than guessed: with the origin below the stage, the
 *    heading's left and right edges sit at about -42deg and +42deg, so
 *    SPREAD is 88deg and the five stops land 22deg apart. Two earlier
 *    passes had them 72deg and then 52.5deg apart, and both times the
 *    teal and the purple pointed off-screen entirely - the field came out
 *    as a red-and-green wash with two fifths of the palette missing. At
 *    22deg the whole mark lights the whole word, left to right.
 *
 * WRAP is not decoration. A conic gradient holds its last colour from the
 * final stop all the way round to 360deg and then jumps straight back to
 * the first, which puts a hard-edged seam at the `from` angle - and at
 * -44deg that seam falls inside the visible stage as a visible crease.
 * Repeating the first colour at 360deg turns that jump into a long, slow
 * interpolation across the off-word region instead.
 *
 * The scrim (listed first, so it paints on top) keeps this at roughly a
 * third strength. At full saturation five primaries across an entire
 * viewport is garish beside the restraint of every other section; damped,
 * it reads as deep jewel tones that are still unmistakably ours.
 */ const SPREAD = 88;
const FIELD = [
    "radial-gradient(100% 90% at 50% 55%, oklch(10% 0.02 275 / 0.18) 0%, oklch(8% 0.02 275 / 0.62) 100%)",
    `conic-gradient(from ${-SPREAD / 2}deg at 50% 112%, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PETALS"].map((x, i)=>`${x.authored} ${(i * SPREAD / (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PETALS"].length - 1)).toFixed(1)}deg`).join(", ")}, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PETALS"][0].authored} 360deg)`
].join(", ");
function AboutPortal() {
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress: p } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: wrapRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    // ---- stage geometry -------------------------------------------------
    // MEASURED FROM THE STAGE, NOT FROM THE WINDOW. The stage is
    // 100svh - --header-h tall, so window.innerHeight overstates it by the
    // header. Feeding that into the viewBox gives the SVG a taller aspect
    // ratio than the element it renders into, and preserveAspectRatio's
    // default (xMidYMid meet) then letterboxes: the sheet is scaled down to
    // fit by height and centred, leaving a bare vertical strip of the
    // photograph down BOTH edges of the stage at all times. It looks like a
    // deliberate border until you resize the window and watch it change.
    // Observing the element itself is also self-correcting - it picks up
    // Header's own height animation for free, with no second source of
    // truth to drift.
    //
    // Initialised to a constant so the server and the first client render
    // agree; real numbers land after hydration.
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [vp, setVp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        w: 1440,
        h: 788
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = stageRef.current;
        if (!el) return;
        const ro = new ResizeObserver(([entry])=>{
            const { width, height } = entry.contentRect;
            if (width > 0 && height > 0) setVp({
                w: width,
                h: height
            });
        });
        ro.observe(el);
        return ()=>ro.disconnect();
    }, []);
    const cx = vp.w / 2;
    const cy = vp.h / 2;
    // ---- measured type size ---------------------------------------------
    // A hidden probe glyph run at a known size gives the real advance width
    // of this exact string in this exact font, so the heading fills the
    // stage at any viewport without a single magic number.
    const probeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [unitWidth, setUnitWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const measure = ()=>{
            if (!probeRef.current) return;
            const w = probeRef.current.getBBox().width;
            if (w > 0) setUnitWidth(w / 100);
        };
        measure();
        // Webfonts land after first paint; remeasure once they do.
        document.fonts?.ready.then(measure);
    }, [
        vp.w
    ]);
    const gutter = vp.w < 640 ? 20 : 48;
    const fontSize = unitWidth ? Math.max(40, Math.min(260, (vp.w - gutter * 2) / unitWidth)) : Math.max(40, Math.min(260, vp.w * 0.17));
    // ---- scroll choreography --------------------------------------------
    const cueOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0,
        0.1
    ], [
        1,
        0
    ]);
    const inkOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.12,
        0.26
    ], [
        1,
        0
    ]);
    // Exponential stops. A linear 1 -> 44 ramp reads as "nothing, nothing,
    // nothing, WHOOSH"; these keep the apparent rate of approach steady.
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.24,
        0.38,
        0.5,
        0.62,
        0.74
    ], [
        1,
        2.4,
        6.5,
        17,
        44
    ]);
    const sheetOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.6,
        0.7
    ], [
        1,
        0
    ]);
    // The field drifts and turns very slightly against the zoom. Without it
    // the colour behind the letters is completely static and the holes read
    // as flat swatches rather than as a window onto something.
    const fieldScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0,
        0.86
    ], [
        1.18,
        1
    ]);
    const fieldSpin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0,
        0.86
    ], [
        -8,
        4
    ]);
    const fieldTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionTemplate"]`scale(${fieldScale}) rotate(${fieldSpin}deg)`;
    // 0.70 -> 0.76 is deliberately empty: the sheet has gone and the scrim
    // has not started, so there is one clear beat of standing in the room
    // before the section starts talking.
    const scrimOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.76,
        0.86
    ], [
        0,
        0.92
    ]);
    const maskG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inkG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Both groups take the SAME transform string, so the holes and the ink
    // fill cannot separate. Written as an attribute rather than a style
    // transform so there is no transform-box / transform-origin question on
    // an SVG group - the origin is explicit in the matrix.
    const identity = `translate(${cx} ${cy}) scale(1) translate(${-cx} ${-cy})`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scale, "change", (s)=>{
        const t = `translate(${cx} ${cy}) scale(${s}) translate(${-cx} ${-cy})`;
        maskG.current?.setAttribute("transform", t);
        inkG.current?.setAttribute("transform", t);
    });
    const cueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inkLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sheetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fieldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrimRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionStyles"])(cueRef, {
        opacity: cueOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionStyles"])(inkLayerRef, {
        opacity: inkOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionStyles"])(sheetRef, {
        opacity: sheetOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionStyles"])(fieldRef, {
        transform: fieldTransform
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionStyles"])(scrimRef, {
        opacity: scrimOpacity
    });
    const textProps = {
        textAnchor: "middle",
        x: cx,
        y: cy,
        dominantBaseline: "middle",
        fontSize,
        letterSpacing: "-0.04em",
        style: {
            fontFamily: "var(--font-display)",
            fontWeight: 800
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "about",
        ref: wrapRef,
        className: "pin-wrap relative h-[360svh] motion-reduce:h-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: stageRef,
            className: "pin-stage",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: fieldRef,
                    "aria-hidden": "true",
                    className: "pin-portal absolute -inset-[18%] will-change-transform motion-reduce:hidden",
                    style: {
                        background: FIELD
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                    lineNumber: 338,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: scrimRef,
                    "aria-hidden": "true",
                    className: "pin-portal absolute inset-0 bg-surface motion-reduce:hidden",
                    style: {
                        opacity: 0
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                    lineNumber: 346,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "pin-portal absolute inset-0 h-full w-full motion-reduce:hidden",
                    viewBox: `0 0 ${vp.w} ${vp.h}`,
                    "aria-hidden": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                id: "about-portal-mask",
                                maskUnits: "userSpaceOnUse",
                                x: -vp.w * BLEED,
                                y: -vp.h * BLEED,
                                width: vp.w * BLEED_SPAN,
                                height: vp.h * BLEED_SPAN,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: -vp.w * BLEED,
                                        y: -vp.h * BLEED,
                                        width: vp.w * BLEED_SPAN,
                                        height: vp.h * BLEED_SPAN,
                                        fill: "#fff"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        ref: maskG,
                                        transform: identity,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            ...textProps,
                                            fill: "#000",
                                            children: HEADING
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                            lineNumber: 376,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                        lineNumber: 375,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                lineNumber: 360,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/AboutPortal.tsx",
                            lineNumber: 359,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            ref: probeRef,
                            x: -9999,
                            y: -9999,
                            fontSize: 100,
                            letterSpacing: "-0.04em",
                            style: {
                                fontFamily: "var(--font-display)",
                                fontWeight: 800
                            },
                            fill: "none",
                            children: HEADING
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/AboutPortal.tsx",
                            lineNumber: 384,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            ref: sheetRef,
                            x: -vp.w * BLEED,
                            y: -vp.h * BLEED,
                            width: vp.w * BLEED_SPAN,
                            height: vp.h * BLEED_SPAN,
                            fill: "var(--color-surface)",
                            mask: "url(#about-portal-mask)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/AboutPortal.tsx",
                            lineNumber: 407,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            ref: inkLayerRef,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                ref: inkG,
                                transform: identity,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    ...textProps,
                                    fill: "var(--color-ink)",
                                    children: HEADING
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                lineNumber: 418,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/AboutPortal.tsx",
                            lineNumber: 417,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: cueRef,
                    "aria-hidden": "true",
                    className: "pin-portal pointer-events-none absolute inset-x-0 bottom-[max(40px,7vh)] flex justify-center motion-reduce:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-eyebrow uppercase text-ink-muted",
                        children: "Scroll to step inside"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/AboutPortal.tsx",
                        lineNumber: 431,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                    lineNumber: 426,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pin-layer pointer-events-none absolute inset-0 flex items-center motion-reduce:static motion-reduce:py-[clamp(64px,8vw,128px)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-auto mx-auto w-full max-w-[1440px] px-6 lg:px-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Stratum, {
                                p: p,
                                at: [
                                    0.82,
                                    0.88
                                ],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-eyebrow uppercase text-ink-muted",
                                    children: HEADING
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                lineNumber: 439,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 grid gap-x-8 gap-y-10 md:grid-cols-3 md:gap-x-10",
                                children: STRATA.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Stratum, {
                                        p: p,
                                        at: [
                                            0.85 + i * 0.03,
                                            0.91 + i * 0.03
                                        ],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                className: `block h-1 w-14 rounded-full ${s.rule}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                                lineNumber: 452,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-body-lg mt-5 text-ink-body",
                                                children: s.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                                lineNumber: 456,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, s.key, true, {
                                        fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                        lineNumber: 451,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                lineNumber: 449,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Stratum, {
                                p: p,
                                at: [
                                    0.94,
                                    1
                                ],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    className: "mt-10 inline-flex items-center gap-1.5 font-medium text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                    children: [
                                        "Know More About Us",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 16,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                            lineNumber: 467,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                    lineNumber: 462,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/AboutPortal.tsx",
                        lineNumber: 438,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/AboutPortal.tsx",
            lineNumber: 320,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/AboutPortal.tsx",
        lineNumber: 315,
        columnNumber: 5
    }, this);
}
/*
 * One strand of the closing copy, faded and lifted into place on its own
 * slice of the timeline.
 *
 * The motion-reduce:! utilities are load-bearing, not decorative. An
 * important declaration in a stylesheet outranks a non-important inline
 * style, and useMotionStyles writes non-important inline styles - so
 * under reduced motion these pin the strand to fully visible and beat
 * anything the scroll timeline tries to write. Without them the copy
 * would sit at its p=0 value, opacity 0, permanently invisible.
 */ function Stratum({ p, at, children }) {
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, at, [
        0,
        1
    ]);
    const lift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, at, [
        22,
        0
    ]);
    const transform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionTemplate"]`translateY(${lift}px)`;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionStyles"])(ref, {
        opacity,
        transform
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "motion-reduce:!opacity-100 motion-reduce:!transform-none",
        style: {
            opacity: 0
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/sections/AboutPortal.tsx",
        lineNumber: 504,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/Enquiry.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Enquiry",
    ()=>Enquiry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Eyebrow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pillars.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/contact.ts [app-ssr] (ecmascript)");
"use client";
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
function Enquiry() {
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const nameId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const emailId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const phoneId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const eventTypeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const messageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    function handleSubmit(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        // TODO(backend): stub only, per Phase 9 - wire to a real endpoint
        // when the Client Query page's backend lands.
        console.log("[Enquiry] stub submission", data);
        setSubmitted(true);
    }
    return(// id is the FAQ's "ask us directly" target. scroll-mt keeps the jump
    // from landing under Header, which is sticky - --header-h is the same
    // live-measured value the pinned stages reserve against (tokens.css).
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
        as: "section",
        id: "enquiry",
        className: "scroll-mt-[var(--header-h)] bg-surface",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
            className: "grid gap-12 lg:grid-cols-2 lg:gap-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                            className: "text-corporate-ink",
                            children: "Get in touch"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-h2 mt-4 text-ink",
                            children: "Let Us Curate The Event For You"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-body-lg mt-4 max-w-[46ch] text-ink-body",
                            children: "As the premier event planning company in the area. Each event and client is unique and we believe our services should be as well."
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_HREF"],
                                    className: "inline-flex items-center gap-3 font-medium text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            size: 18,
                                            "aria-hidden": "true",
                                            className: "text-corporate-ink"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE"]
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMAIL"]}`,
                                    className: "inline-flex items-center gap-3 font-medium text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            size: 18,
                                            "aria-hidden": "true",
                                            className: "text-corporate-ink"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMAIL"]
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.08,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-surface-raised p-6 shadow-card sm:p-8",
                        children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "status",
                            className: "flex flex-col items-center py-10 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 40,
                                    "aria-hidden": "true",
                                    className: "text-live-ink"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-h3 mt-4 text-ink",
                                    children: "Thank you"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-body mt-2 text-ink-body",
                                    children: "Your enquiry has been received. Our team will get back to you shortly."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                            lineNumber: 85,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "flex flex-col gap-5",
                            noValidate: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    label: "Your Name",
                                    id: nameId,
                                    name: "name",
                                    required: true,
                                    autoComplete: "name"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    label: "Email",
                                    id: emailId,
                                    name: "email",
                                    type: "email",
                                    required: true,
                                    autoComplete: "email"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    label: "Phone",
                                    id: phoneId,
                                    name: "phone",
                                    type: "tel",
                                    required: true,
                                    autoComplete: "tel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: eventTypeId,
                                            className: "text-small font-medium text-ink",
                                            children: [
                                                "Event Type ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 32
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sr-only",
                                                    children: " (required)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: eventTypeId,
                                            name: "eventType",
                                            required: true,
                                            defaultValue: "",
                                            className: "text-body rounded-md border border-hairline bg-surface px-3.5 py-2.5 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    disabled: true,
                                                    children: "Select an event type"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PILLARS"].map((pillar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: pillar.id,
                                                        children: pillar.name
                                                    }, pillar.id, false, {
                                                        fileName: "[project]/src/components/sections/Enquiry.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: messageId,
                                            className: "text-small font-medium text-ink",
                                            children: [
                                                "Your Message ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 34
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sr-only",
                                                    children: " (required)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: messageId,
                                            name: "message",
                                            required: true,
                                            rows: 4,
                                            className: "text-body resize-none rounded-md border border-hairline bg-surface px-3.5 py-2.5 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    variant: "primary",
                                    className: "mt-2 justify-center",
                                    children: "Send Enquiry"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                            lineNumber: 94,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Enquiry.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Enquiry.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Enquiry.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this));
}
function Field({ label, id, name, type = "text", required, autoComplete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "text-small font-medium text-ink",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Enquiry.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: " (required)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Enquiry.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Enquiry.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Enquiry.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                name: name,
                type: type,
                required: required,
                autoComplete: autoComplete,
                className: "text-body rounded-md border border-hairline bg-surface px-3.5 py-2.5 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Enquiry.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Enquiry.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/HeroSequence.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSequence",
    ()=>HeroSequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-template.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$PinwheelMark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand/PinwheelMark.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/petals.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pillars.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-motion-styles.ts [app-ssr] (ecmascript)");
"use client";
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
/*
 * THE OPENING SEQUENCE - one pinned stage, one scroll timeline.
 *
 * Act 1  "From Concept to Celebration: Unforgettable Experiences" opens as
 *        OUTLINE type - drawn but not yet made, which is what concept looks
 *        like. Five threads, one per figure in the logo, sweep across and
 *        leave the words SOLID behind them: the headline is built by the
 *        brand palette. The threads gather, resolve into the mark, and the
 *        mark floods the screen.
 * Act 2  "Five disciplines. One team on the floor." rises out of the flood
 *        and anchors to the top of the stage.
 * Act 3  The mark returns hollow. The wheel turns one petal per beat; each
 *        turn claims a figure in its real logo colour and names the
 *        discipline it stands for. After five turns it has come full circle
 *        and the logo is whole.
 *
 * WHY ONE COMPONENT AND NOT TWO. This was first built as a Threads hero
 * followed by a separate pinned Petals section, and that is structurally
 * incapable of working: two sticky stages means the first one is scrolling
 * out of the top of the viewport while the second scrolls in from the
 * bottom, so for a full screen-height the handover line is visible TWICE,
 * once near each edge. Matching the two copies pixel for pixel does not
 * help - the duplication is the sticky mechanics, not the styling. One
 * wrapper, one sticky child and one progress value means the line is a
 * single element that simply moves.
 *
 * WHY EVERY SCROLL-LINKED STYLE GOES THROUGH useMotionStyles. Binding a
 * useScroll-derived MotionValue to a motion component's style prop makes
 * Motion hand the animation to a native CSS ViewTimeline, whose progress
 * is a different curve from useScroll's offset. The paint then silently
 * desyncs from the value. See the note in use-motion-styles.ts.
 *
 * NOTHING HERE HARDCODES A THEME. An earlier pass forced Act 3 onto a dark
 * stage to rescue the amber figure (#fcd088 is only about 1.3:1 on the bone
 * page). That is now the theme system's job: the petal tokens resolve to the
 * authored artwork colours in dark and to lightness-corrected ones in light,
 * so this component just uses surface / ink / hairline and follows whichever
 * theme the visitor chose. See tokens.css.
 *
 * REDUCED MOTION is handled in CSS, never by returning a different tree.
 * useReducedMotion() is false during SSR, so branching on it renders one
 * structure on the server and another on the client - that produced a real
 * hydration mismatch plus Motion's "Target ref is defined but not
 * hydrated" error. The markup below is identical in both modes.
 */ const THREADS = [
    {
        key: "activation",
        color: "var(--color-activation-mark)",
        y: -0.34,
        len: 0.16,
        lag: 0.0
    },
    {
        key: "content",
        color: "var(--color-content-mark)",
        y: -0.14,
        len: 0.26,
        lag: 0.03
    },
    {
        key: "live",
        color: "var(--color-live-mark)",
        y: 0.06,
        len: 0.2,
        lag: 0.06
    },
    {
        key: "corporate",
        color: "var(--color-corporate-mark)",
        y: 0.26,
        len: 0.3,
        lag: 0.09
    },
    {
        key: "weddings",
        color: "var(--color-weddings-mark)",
        y: 0.46,
        len: 0.14,
        lag: 0.12
    }
];
const HEADLINE_STYLE = {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(2.25rem, 0.9rem + 5.4vw, 5.5rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.035em"
};
/*
 * How far the solid layer's clip-path reaches PAST its own box, top and
 * bottom, as a percentage of that box.
 *
 * Without it the descenders never fill in. clip-path clips to the border
 * box, and lineHeight 1.02 above means the line box is barely taller than
 * the em - so Manrope's descenders paint below it. Measured at the 88px
 * cap: the h1 box ends at y=570 and the glyph run ends at y=584, i.e. 14px
 * of every g, p and y hanging outside. The outline layer has no clip-path
 * so it kept its descenders, the solid layer lost them, and the result was
 * a headline that filled in white except for the tails, which stayed as
 * hollow outlines for the whole sequence.
 *
 * Percent, not px, because the font-size is a clamp() - the overhang
 * scales with it, so a fixed pixel figure would be right at exactly one
 * viewport width. 25 is far more than the ~8% measured; there is nothing
 * else inside this layer, so over-reaching reveals nothing and costs
 * nothing. Negative inset() offsets are what expand a clip region outward
 * (verified supported before relying on it).
 */ const CLIP_BLEED = 25;
const ANCHOR_STYLE = {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(1.75rem, 1rem + 3vw, 3rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.035em"
};
/** Beat 1 reveals the wheel; 1-5 are the petals; 6 is the close. */ const BEAT_AT = [
    0.47,
    0.57,
    0.66,
    0.75,
    0.84,
    0.93
];
const DISCIPLINES = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PETALS"].map((petal, i)=>{
    const pillar = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PILLARS"].find((p)=>p.id === petal.id);
    return {
        ...petal,
        index: String(i + 1).padStart(2, "0"),
        name: pillar.name,
        blurb: pillar.blurb,
        services: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES"].filter((s)=>s.pillar === petal.id)
    };
});
function HeroSequence() {
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress: p } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: wrapRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    // ---- Act 1 ----------------------------------------------------------
    const wipeRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.04,
        0.25
    ], [
        100,
        0
    ]);
    const clip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionTemplate"]`inset(${-CLIP_BLEED}% ${wipeRight}% ${-CLIP_BLEED}% 0)`;
    const front = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.04,
        0.25
    ], [
        0,
        100
    ]);
    const gather = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.25,
        0.31
    ], [
        0,
        1
    ]);
    const threadOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.02,
        0.05,
        0.29,
        0.33
    ], [
        0,
        1,
        1,
        0
    ]);
    const uiOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0,
        0.04,
        0.08
    ], [
        1,
        1,
        0
    ]);
    const headlineOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.29,
        0.34
    ], [
        1,
        0
    ]);
    const markOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.28,
        0.31,
        0.36,
        0.39
    ], [
        0,
        1,
        1,
        0
    ]);
    const markTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.29,
        0.38
    ], [
        0.35,
        16
    ]), (s)=>`scale(${s})`);
    // The flood carries the hand-off from Act 1 to Act 2 and is then CLEARED
    // before the wheel arrives. Leaving it up looked fine but is a real
    // contrast trap: the tint sits between the text and the page, and the
    // petal tokens were solved against the plain surface, not against a
    // purple wash. Measured over the flood, three petals dropped to 2.74-2.76:1
    // in light and the purple to 2.81:1 in dark - all under the 3:1 they are
    // supposed to hold. On the bare surface they are 3.01-13.01:1.
    const floodOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.32,
        0.38,
        0.47,
        0.53
    ], [
        0,
        1,
        1,
        0
    ]);
    // ---- Act 2: the line rises out of the flood and anchors -------------
    const lineOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.37,
        0.42
    ], [
        0,
        1
    ]);
    // 1 = parked at centre, 0 = anchored at top. Scroll-linked rather than a
    // CSS transition so the move tracks the scroll instead of firing once.
    // 0.51em is half a line box at line-height 1.02 - using em rather than
    // 50% keeps the multiplication inside calc() unambiguous.
    const park = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.42,
        0.5
    ], [
        1,
        0
    ]);
    const lineTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionTemplate"]`translateY(calc(${park} * (42svh - 0.51em)))`;
    // ---- Act 3 ----------------------------------------------------------
    const [beat, setBeat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(p, "change", (v)=>{
        let next = 0;
        for (const t of BEAT_AT)if (v >= t) next += 1;
        setBeat(next);
    });
    const entered = beat >= 1;
    const active = beat >= 1 && beat <= 5 ? DISCIPLINES[beat - 1] : null;
    const rotation = beat <= 1 ? 0 : -__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STEP"] * (beat - 1);
    const filled = DISCIPLINES.slice(0, Math.min(beat, 5)).map((d)=>d.id);
    const hue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.04,
        0.1,
        0.16,
        0.22,
        0.28
    ], [
        26,
        79,
        146,
        220,
        314
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(hue, "change", (h)=>{
        document.documentElement.style.setProperty("--brand-hue", String(h));
    });
    const eyebrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const solidRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const threadsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const floodRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionStyles"])(eyebrowRef, {
        opacity: uiOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionStyles"])(headlineRef, {
        opacity: headlineOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionStyles"])(solidRef, {
        "clip-path": clip
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionStyles"])(threadsRef, {
        opacity: threadOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionStyles"])(ctaRef, {
        opacity: uiOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionStyles"])(markRef, {
        opacity: markOpacity,
        transform: markTransform
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionStyles"])(floodRef, {
        opacity: floodOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionStyles"])(lineRef, {
        opacity: lineOpacity,
        transform: lineTransform
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapRef,
        className: "relative h-[980svh] motion-reduce:h-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero-stage",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: floodRef,
                    "aria-hidden": "true",
                    className: "absolute inset-0 motion-reduce:hidden",
                    style: {
                        opacity: 0,
                        background: "radial-gradient(120% 120% at 50% 50%, var(--flood-inner) 0%, var(--flood-outer) 100%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/HeroSequence.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center motion-reduce:static motion-reduce:min-h-svh motion-reduce:py-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto w-full max-w-[1440px] px-6 lg:px-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                ref: eyebrowRef,
                                className: "text-eyebrow mb-6 uppercase text-ink-muted motion-reduce:!opacity-100",
                                children: "We create experiences"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: headlineRef,
                                className: "relative motion-reduce:!opacity-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "relative",
                                        style: {
                                            ...HEADLINE_STYLE,
                                            WebkitTextStroke: "1.25px var(--color-ink)",
                                            color: "transparent"
                                        },
                                        children: [
                                            "From Concept to Celebration:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, this),
                                            "Unforgettable Experiences"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: solidRef,
                                        "aria-hidden": "true",
                                        // Both clip values carry the vertical bleed too - the
                                        // reduced-motion one because it is the FINAL state (fully
                                        // wiped), which is exactly where a clipped descender would
                                        // sit permanently, and the inline one because it is what
                                        // the server renders before any scroll value exists.
                                        className: "absolute inset-0 text-ink motion-reduce:![clip-path:inset(-25%_0_-25%_0)]",
                                        style: {
                                            ...HEADLINE_STYLE,
                                            clipPath: `inset(${-CLIP_BLEED}% 100% ${-CLIP_BLEED}% 0)`
                                        },
                                        children: [
                                            "From Concept to Celebration:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this),
                                            "Unforgettable Experiences"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: threadsRef,
                                        "aria-hidden": "true",
                                        className: "pointer-events-none absolute inset-0 motion-reduce:hidden",
                                        style: {
                                            opacity: 0
                                        },
                                        children: THREADS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Thread, {
                                                thread: t,
                                                front: front,
                                                gather: gather
                                            }, t.key, false, {
                                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                lineNumber: 266,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 hidden gap-2 motion-reduce:flex",
                                "aria-hidden": "true",
                                children: THREADS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-[5px] w-16 rounded-full",
                                        style: {
                                            background: t.color
                                        }
                                    }, t.key, false, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 274,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: ctaRef,
                                className: "mt-10 flex flex-wrap gap-4 motion-reduce:!opacity-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/work",
                                        className: "rounded-md bg-corporate-fill px-6 py-3 font-medium text-white transition-colors duration-[var(--dur-fast)] hover:bg-corporate-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                        children: "Explore Our Work"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        className: "rounded-md border border-hairline px-6 py-3 font-medium text-ink transition-colors duration-[var(--dur-fast)] hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                        children: "Know More About Us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/HeroSequence.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: markRef,
                    "aria-hidden": "true",
                    className: "pointer-events-none absolute inset-0 flex items-center justify-center motion-reduce:hidden",
                    style: {
                        opacity: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/logo-mark.png",
                        alt: "",
                        width: 729,
                        height: 710,
                        className: "h-[22vmin] w-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/HeroSequence.tsx",
                    lineNumber: 303,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex flex-col px-6 lg:px-10 motion-reduce:static motion-reduce:py-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex h-full w-full max-w-[1440px] flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-[8svh] motion-reduce:pt-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    ref: lineRef,
                                    className: "text-center text-ink motion-reduce:!opacity-100 motion-reduce:!transform-none",
                                    style: {
                                        ...ANCHOR_STYLE,
                                        opacity: 0
                                    },
                                    children: "Five disciplines. One team on the floor."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid flex-1 items-center gap-8 pb-[8svh] transition-opacity duration-[900ms] motion-reduce:!opacity-100 md:grid-cols-[minmax(0,42%)_minmax(0,1fr)] md:gap-14",
                                style: {
                                    opacity: entered ? 1 : 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mx-auto w-[min(46vw,340px)] md:w-full md:max-w-[420px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$PinwheelMark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PinwheelMark"], {
                                            rotation: rotation,
                                            filled: filled,
                                            className: "h-auto w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid min-h-[clamp(240px,34svh,340px)]",
                                        children: [
                                            DISCIPLINES.map((d, i)=>{
                                                const isActive = active?.id === d.id;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "aria-hidden": !isActive,
                                                    className: "col-start-1 row-start-1 transition-[opacity,transform] ease-out-expo",
                                                    style: {
                                                        opacity: isActive ? 1 : 0,
                                                        /* Signed against the beat, so a discipline already
                           passed leaves upward and one still to come waits
                           below - the copy travels the same way the wheel
                           is turning, and reverses with it on scroll-up. */ transform: isActive ? "none" : `translateY(${i < beat - 1 ? -18 : 18}px)`,
                                                        /* Out faster than in, and in slightly behind, so
                           the two never sit at half opacity on top of each
                           other. */ transitionDuration: isActive ? "620ms" : "360ms",
                                                        transitionDelay: isActive ? "110ms" : "0ms",
                                                        // They overlap now, so only the live one is hittable.
                                                        pointerEvents: isActive ? "auto" : "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "tabular-nums",
                                                            style: {
                                                                color: d.color,
                                                                fontFamily: "var(--font-display)",
                                                                fontWeight: 800,
                                                                fontSize: "clamp(2.5rem, 1.6rem + 3vw, 4rem)",
                                                                letterSpacing: "-0.03em",
                                                                lineHeight: 1
                                                            },
                                                            children: d.index
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-h2 mt-3 text-ink",
                                                            children: d.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-body-lg mt-4 max-w-[46ch] text-ink-body",
                                                            children: d.blurb
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "mt-7 flex flex-wrap gap-2",
                                                            children: d.services.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: `/services/${s.slug}`,
                                                                        className: "text-sm inline-block rounded-full border px-3.5 py-1.5 text-ink-body transition-colors duration-[var(--dur-fast)] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                                                        style: {
                                                                            borderColor: `color-mix(in oklab, ${d.color} 45%, transparent)`
                                                                        },
                                                                        tabIndex: isActive ? 0 : -1,
                                                                        children: s.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                                        lineNumber: 403,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, s.slug, false, {
                                                                    fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, d.id, true, {
                                                    fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 21
                                                }, this);
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "aria-hidden": beat !== 6,
                                                className: "col-start-1 row-start-1 transition-[opacity,transform] ease-out-expo",
                                                style: {
                                                    opacity: beat === 6 ? 1 : 0,
                                                    // The close only ever arrives from below; there is no
                                                    // beat after it to leave upward for.
                                                    transform: beat === 6 ? "none" : "translateY(18px)",
                                                    transitionDuration: beat === 6 ? "620ms" : "360ms",
                                                    transitionDelay: beat === 6 ? "110ms" : "0ms",
                                                    pointerEvents: beat === 6 ? "auto" : "none"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-h2 max-w-[16ch] text-ink",
                                                        children: "Sixteen services. One accountable team."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-body-lg mt-4 max-w-[46ch] text-ink-body",
                                                        children: "Every figure in the mark is a discipline we run in-house, which is why a brief never has to be handed between agencies halfway through."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-8 flex flex-wrap gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/services",
                                                                // display:none used to take these out of the tab
                                                                // order for free; stacked and merely transparent,
                                                                // they would otherwise be focusable while invisible
                                                                // AND aria-hidden, which is the worst of both.
                                                                tabIndex: beat === 6 ? 0 : -1,
                                                                className: "rounded-md bg-corporate-fill px-6 py-3 font-medium text-white transition-colors duration-[var(--dur-fast)] hover:bg-corporate-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                                                children: "View All Services"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/client-query",
                                                                tabIndex: beat === 6 ? 0 : -1,
                                                                className: "rounded-md border border-hairline px-6 py-3 font-medium text-ink transition-colors duration-[var(--dur-fast)] hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                                                children: "Start an Enquiry"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                lineNumber: 420,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": "true",
                                className: "absolute inset-x-0 bottom-6 flex justify-center gap-2 transition-opacity duration-[900ms] motion-reduce:hidden",
                                style: {
                                    opacity: entered ? 1 : 0
                                },
                                children: DISCIPLINES.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-1.5 rounded-full transition-all duration-[var(--dur-base)]",
                                        style: {
                                            width: beat === i + 1 ? 28 : 10,
                                            background: i < beat ? d.color : "var(--color-hairline)"
                                        }
                                    }, d.id, false, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 471,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                lineNumber: 465,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                        lineNumber: 320,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/HeroSequence.tsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/HeroSequence.tsx",
            lineNumber: 204,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/HeroSequence.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
function Thread({ thread, front, gather }) {
    // Each thread trails the wipe front by its own lag, so the leading edge
    // reads as a braid rather than one hard line. On gather they converge on
    // 50% and their lengths collapse to nothing.
    const leftPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])([
        front,
        gather
    ], ([f, g])=>{
        const lagged = Math.max(0, f - thread.lag * 100);
        return lagged + (50 - lagged) * g;
    });
    const widthPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(gather, [
        0,
        1
    ], [
        thread.len * 100,
        0
    ]);
    const left = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionTemplate"]`${leftPct}%`;
    const width = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionTemplate"]`${widthPct}%`;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionStyles"])(ref, {
        left,
        width
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: "absolute h-[6px] -translate-x-full rounded-full",
        style: {
            top: `calc(50% + ${thread.y * 100}%)`,
            left: 0,
            width: 0,
            background: thread.color
        }
    }, void 0, false, {
        fileName: "[project]/src/components/sections/HeroSequence.tsx",
        lineNumber: 512,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/Scale.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scale",
    ()=>Scale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$in$2d$view$2d$once$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-in-view-once.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/stats.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
/*
 * PLAN.md Phase 7. Every STATS entry is currently value: null (section
 * 3.7 - the live site publishes no numbers, none may be invented), so
 * this renders four em-dashes and AnimatedNumber never actually runs on
 * the shipped site - it is dead code on the current data, kept ready for
 * whenever the client supplies real figures.
 *
 * Uses useInViewOnce (src/lib) rather than motion/react's own useInView.
 * While building this, motion's version intermittently failed to report
 * the target as in view during dev-mode testing; a plain IntersectionObserver
 * on the same element did not show the same failure in that same test.
 * Root cause was NOT conclusively isolated (React StrictMode's double
 * effect invocation and Turbopack HMR were both plausible confounds, and
 * time was better spent elsewhere given this path has zero effect on the
 * current site). useInViewOnce is a small, standard, directly-verifiable
 * IntersectionObserver hook with no other dependency - safe to ship
 * regardless of what was actually wrong with the alternative.
 */ function AnimatedNumber({ value }) {
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$in$2d$view$2d$once$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInViewOnce"])("-80px");
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Reduced motion never enters the animate() branch at all - value is
    // rendered directly below instead of being synced into state via the
    // effect, so there is no synchronous setState-in-effect (the lint rule
    // this tripped: "Calling setState synchronously within an effect can
    // trigger cascading renders"). The animate() onUpdate callback below
    // IS the sanctioned pattern - state set from an external system's
    // per-frame callback, not from the effect body itself.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!inView || reduce) return;
        const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(0, value, {
            duration: 1.4,
            ease: [
                0.16,
                1,
                0.3,
                1
            ],
            onUpdate: (v)=>setDisplay(Math.round(v))
        });
        return ()=>controls.stop();
    }, [
        inView,
        reduce,
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        children: reduce ? value : display
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Scale.tsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
function Scale() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
        as: "section",
        className: "bg-surface",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 divide-x divide-y divide-hairline border-y border-hairline sm:grid-cols-4 sm:divide-y-0",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATS"].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2 px-4 py-10 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-h2 tabular-nums text-ink",
                                style: {
                                    fontFamily: "var(--font-display)"
                                },
                                children: stat.value === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-ink-muted",
                                    children: "—"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Scale.tsx",
                                    lineNumber: 68,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedNumber, {
                                            value: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Scale.tsx",
                                            lineNumber: 71,
                                            columnNumber: 21
                                        }, this),
                                        stat.suffix
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Scale.tsx",
                                    lineNumber: 70,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Scale.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-small text-ink-muted",
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Scale.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this)
                        ]
                    }, stat.label, true, {
                        fileName: "[project]/src/components/sections/Scale.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Scale.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Scale.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Scale.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/AccordionGallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/*
 * VENDORED THIRD-PARTY COMPONENT - React Bits "Accordion Gallery" (TS-TW).
 *   docs:     https://reactbits.dev/components/accordion-gallery
 *   registry: https://reactbits.dev/r/AccordionGallery-TS-TW.json
 *
 * React Bits is copy-in, not a package: this file is ours to maintain, and
 * upstream will not patch it for us. The five deltas from the registry
 * source are listed here so a future re-sync knows exactly what to keep.
 * Everything not listed is byte-for-byte upstream - please keep it that way
 * rather than "tidying" it, so the diff stays readable.
 *
 *  1. "use client". App Router requirement - hooks, refs and GSAP.
 *
 *  2. `import type` for the three type-only React imports. No behaviour
 *     change; it just stops KeyboardEvent/MouseEvent from looking like
 *     value imports that shadow the DOM globals.
 *
 *  3. loading="lazy" decoding="async" on the <img>. Upstream loads all
 *     panels eagerly. This gallery sits well below the fold here and the
 *     five photographs are ~486KB together, so eager was costing a
 *     mid-page stall for pixels nobody had scrolled to yet.
 *
 *  4. The max-[520px] overrides on the MEDIA span - the important bit.
 *     Upstream ships a CSS-only mobile stack (max-[520px]:!flex-col on the
 *     root) but the JS never learns about it: measure() still reads
 *     rect.WIDTH and sizes the media box from expandRatio, so on a 390px
 *     phone the image span comes out ~147px wide inside a ~342px panel and
 *     you get bare panel background down both sides of every photo. These
 *     four utilities pin the media to the panel box at exactly the
 *     breakpoint upstream already special-cases. transform-none is what
 *     cancels GSAP's centring translate, so !inset-0 has to come with it or
 *     the image drops half a box down and right.
 *
 *  5. role="list" / role="listitem" removed. Every panel here is a real <a>
 *     to a work page, and role="listitem" OVERRIDES the implicit link role -
 *     screen readers would announce five list items and never mention that
 *     any of them go anywhere. Without the pair they are announced as what
 *     they are: labelled links. The root keeps its aria-label.
 *
 *  6. handleKeyDown moves DOM focus, not just selection. Written up at the
 *     call site below.
 *
 * KNOWN UPSTREAM QUIRK, deliberately left alone: --ag-dim is animated onto
 * the media span, but it is read by the overlay span, which is media's
 * SIBLING - so it never inherits and the dim sits at its 0.35 fallback for
 * every panel, active or not. The effect is a constant cinematic scrim
 * rather than one that lifts off the active photo. That reads fine over
 * these photographs in both themes, and matching the published demo is
 * worth more than the extra pop. If it ever needs fixing, the one-line
 * version is to write --ag-dim to `panel` instead of `media`, which both
 * children DO inherit from.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
const DEFAULT_ITEMS = [
    {
        image: 'https://picsum.photos/id/1015/900/1200',
        label: 'Canyon',
        link: '#'
    },
    {
        image: 'https://picsum.photos/id/1018/900/1200',
        label: 'Ridgeline',
        link: '#'
    },
    {
        image: 'https://picsum.photos/id/1039/900/1200',
        label: 'Falls',
        link: '#'
    },
    {
        image: 'https://picsum.photos/id/1043/900/1200',
        label: 'Harbour',
        link: '#'
    },
    {
        image: 'https://picsum.photos/id/1044/900/1200',
        label: 'Skyline',
        link: '#'
    }
];
const AccordionGallery = ({ items = DEFAULT_ITEMS, defaultIndex = 2, accentColor = '#ffffff', overlayColor = '#060010', textColor = '#ffffff', height = 460, gap = 10, radius = 16, expandRatio = 0.52, orientation = 'horizontal', duration = 0.6, ease = 'power3.out', parallax = 0.5, tilt = 8, stagger = 0.06, trigger = 'hover', showLabels = true, grayscale = true, className = '' })=>{
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mediaRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const barRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const textRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const tlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const firstRunRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const mediaSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(320);
    const vertical = orientation === 'vertical';
    const count = items.length;
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Math.min(Math.max(defaultIndex, 0), count - 1));
    const prefersReduced = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false;
    const overlayBg = `linear-gradient(180deg, transparent 45%, color-mix(in srgb, ${overlayColor} 78%, transparent) 100%), color-mix(in srgb, ${overlayColor} calc(var(--ag-dim, 0.35) * 100%), transparent)`;
    const applyLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((animate)=>{
        const panels = panelRefs.current;
        if (!panels.length) return;
        const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
        const grow = count > 1 ? r * (count - 1) / (1 - r) : 1;
        const mediaSize = mediaSizeRef.current;
        tlRef.current?.kill();
        const dur = animate && !prefersReduced ? duration : 0;
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
        panels.forEach((panel, i)=>{
            if (!panel) return;
            const isActive = i === active;
            const media = mediaRefs.current[i];
            const bar = barRefs.current[i];
            const text = textRefs.current[i];
            const rot = isActive ? 0 : i < active ? tilt : -tilt;
            const rotProp = vertical ? {
                rotateX: -rot
            } : {
                rotateY: rot
            };
            tl.to(panel, {
                flexGrow: isActive ? grow : 1,
                ...rotProp,
                duration: dur,
                ease
            }, 0);
            if (media) {
                const drift = Math.max(-1.5, Math.min(1.5, active - i));
                const shift = drift * parallax * mediaSize * 0.06;
                const gray = grayscale ? isActive ? 0 : 1 : 0;
                tl.to(media, {
                    xPercent: -50,
                    yPercent: -50,
                    x: vertical ? 0 : isActive ? 0 : shift,
                    y: vertical ? isActive ? 0 : shift : 0,
                    '--ag-gray': gray,
                    '--ag-dim': isActive ? 0 : 0.35,
                    duration: dur,
                    ease
                }, 0);
            }
            if (showLabels && bar && text) {
                if (isActive) {
                    tl.to([
                        bar,
                        text
                    ], {
                        opacity: 1,
                        x: 0,
                        duration: dur,
                        ease,
                        stagger: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : stagger
                    }, 0);
                } else {
                    tl.to([
                        bar,
                        text
                    ], {
                        opacity: 0,
                        x: -14,
                        duration: dur * 0.6,
                        ease
                    }, 0);
                }
            }
        });
        tlRef.current = tl;
    }, [
        active,
        count,
        expandRatio,
        duration,
        ease,
        vertical,
        tilt,
        parallax,
        grayscale,
        showLabels,
        stagger,
        prefersReduced
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = rootRef.current;
        if (!el) return;
        const measure = ()=>{
            const rect = el.getBoundingClientRect();
            const total = vertical ? rect.height : rect.width;
            const usable = Math.max(total - gap * (count - 1), 120);
            const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22);
            mediaSizeRef.current = size;
            el.style.setProperty('--ag-media-size', `${size}px`);
            applyLayout(!firstRunRef.current);
        };
        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(el);
        return ()=>ro.disconnect();
    }, [
        applyLayout,
        gap,
        count,
        expandRatio,
        vertical
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        applyLayout(!firstRunRef.current);
        firstRunRef.current = false;
    }, [
        applyLayout
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            tlRef.current?.kill();
        }, []);
    const handleEnter = (i)=>{
        if (trigger === 'hover') setActive(i);
    };
    const handleClick = (i, e)=>{
        if (i !== active) {
            e.preventDefault();
            setActive(i);
        }
    };
    const handleKeyDown = (i, e)=>{
        // Delta 6: the .focus() call. Upstream only calls setActive, leaving DOM
        // focus parked on the panel that was tabbed to - so `i` is the same on
        // every keypress and the second ArrowRight re-selects the same
        // neighbour. Measured: focus panel 0, press ArrowRight twice, panel 1
        // opens both times. Moving focus is also what makes it correct rather
        // than merely unstuck; the panels are links, and selection that does not
        // follow focus leaves Enter firing on a panel the user cannot see.
        const step = (n)=>{
            e.preventDefault();
            setActive(n);
            panelRefs.current[n]?.focus();
        };
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            step((i + 1) % count);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            step((i - 1 + count) % count);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: `flex ${vertical ? 'flex-col' : 'flex-row'} w-full max-w-full [perspective:1400px] max-[520px]:!flex-col max-[520px]:[perspective:none] ${className}`,
        style: {
            gap: `${gap}px`,
            height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px`
        },
        "aria-label": "Image accordion gallery",
        children: items.map((item, i)=>{
            const isActive = i === active;
            const Tag = item.link ? 'a' : 'div';
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                ref: (el)=>{
                    panelRefs.current[i] = el;
                },
                className: "group relative block min-w-0 min-h-0 flex-[1_1_0] cursor-pointer overflow-hidden bg-[#0a0713] no-underline outline-none [transform-style:preserve-3d] [transform-origin:center] [box-shadow:0_10px_30px_-18px_rgba(0,0,0,0.8)] focus-visible:[box-shadow:0_0_0_2px_var(--ag-accent),0_10px_30px_-18px_rgba(0,0,0,0.8)] max-[520px]:min-h-[84px] max-[520px]:!transform-none",
                style: {
                    borderRadius: `${radius}px`,
                    '--ag-accent': accentColor,
                    willChange: 'flex-grow, transform'
                },
                href: item.link || undefined,
                onClick: (e)=>handleClick(i, e),
                onMouseEnter: ()=>handleEnter(i),
                onFocus: ()=>setActive(i),
                onKeyDown: (e)=>handleKeyDown(i, e),
                tabIndex: 0,
                "aria-current": isActive ? 'true' : undefined,
                "aria-label": item.label,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inset-0 overflow-hidden [border-radius:inherit]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: (el)=>{
                                    mediaRefs.current[i] = el;
                                },
                                className: "absolute top-1/2 left-1/2 [filter:grayscale(var(--ag-gray,1))] max-[520px]:!inset-0 max-[520px]:!h-full max-[520px]:!w-full max-[520px]:!transform-none",
                                style: {
                                    width: vertical ? '100%' : 'var(--ag-media-size, 320px)',
                                    height: vertical ? 'var(--ag-media-size, 320px)' : '100%',
                                    willChange: 'transform, filter'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.image,
                                    alt: item.alt || item.label || '',
                                    draggable: false,
                                    loading: "lazy",
                                    decoding: "async",
                                    className: "block h-full w-full select-none object-cover [-webkit-user-drag:none]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/AccordionGallery.tsx",
                                    lineNumber: 326,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AccordionGallery.tsx",
                                lineNumber: 307,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pointer-events-none absolute inset-0",
                                style: {
                                    background: overlayBg
                                },
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AccordionGallery.tsx",
                                lineNumber: 335,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/AccordionGallery.tsx",
                        lineNumber: 306,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute bottom-5 left-5 right-5 z-[2] flex items-center gap-3",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: (el)=>{
                                    barRefs.current[i] = el;
                                },
                                className: "h-[26px] w-[3px] flex-none rounded-[3px] opacity-0",
                                style: {
                                    background: accentColor,
                                    boxShadow: `0 0 12px color-mix(in srgb, ${accentColor} 60%, transparent)`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AccordionGallery.tsx",
                                lineNumber: 346,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: (el)=>{
                                    textRefs.current[i] = el;
                                },
                                className: "overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(1rem,1.4vw,1.4rem)] font-semibold tracking-[0.01em] opacity-0 [text-shadow:0_2px_14px_rgba(0,0,0,0.55)]",
                                style: {
                                    color: textColor
                                },
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AccordionGallery.tsx",
                                lineNumber: 356,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/AccordionGallery.tsx",
                        lineNumber: 342,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, i, true, {
                fileName: "[project]/src/components/ui/AccordionGallery.tsx",
                lineNumber: 284,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AccordionGallery.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AccordionGallery;
}),
"[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
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
function Button({ variant = "primary", children, className, href, type = "button", onClick }) {
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(base, variants[variant], className);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            variant === "secondary" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative",
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-[var(--dur-fast)] group-hover:scale-x-100",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Button.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this) : children,
            variant === "primary" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block transition-transform duration-[var(--dur-fast)] ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                "aria-hidden": "true",
                children: "↗"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: classes,
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        className: classes,
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/CardStack.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardStack",
    ()=>CardStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/*
 * The pop stack. The cards sit as a fanned deck on the centre line of the
 * row; when the row reaches mid-screen they fly apart into their real grid
 * positions - two out to the left, two out to the right, the middle one
 * staying where it is. Leave the section in either direction and they
 * gather back into the deck, so every pass plays it again.
 *
 * IT IS TRIGGERED ON ENTRY, NOT TIED TO SCROLL POSITION. Scrubbing the
 * spread against scroll progress is the more obvious build and is wrong
 * here: it would mean the cards are only readable at one exact scroll
 * offset and any scroll away from it takes the copy back out of place.
 * Entry starts it, and it finishes on its own clock whatever the reader
 * does next.
 *
 * WHY THE LAYOUT IS NEVER TOUCHED. Every card renders in its normal grid
 * cell and stays there as far as layout is concerned - the deck is a
 * transform on a wrapper and nothing more. No reflow per frame, no
 * absolute positioning to unwind, and the server HTML is the finished
 * five-across row. With JS off, below the gate, or under
 * prefers-reduced-motion, no transform is ever written and this section is
 * exactly what it was before the file existed.
 */ /*
 * The gate. "two left, one middle, two right" only describes the xl
 * layout - the grid is 1 / 2 / 3 columns below that (see Pillars.tsx),
 * where there is no single middle card and the deck would have to collapse
 * across two rows. Under the gate the cards keep the plain staggered fade
 * they always had.
 */ const SPREAD_AT = "(min-width: 1280px)";
/*
 * TWO BANDS, NOT ONE LINE. Opening and closing cannot share a trigger,
 * because a single line means the deck re-stacks at the exact scroll
 * position where it opened - nudge the wheel back and forth across it and
 * the cards flap. Both are rootMargins, so both read as screen positions:
 *
 *   OPEN  in the middle 20% of the screen. Scrolling down, the row
 *         overlaps it once its top passes 60% of viewport height;
 *         scrolling up, once its bottom passes 40%. Either direction, the
 *         pop starts as the row reaches mid-screen and lands with it
 *         comfortably placed.
 *
 *   SHUT  on leaving the middle 60%, which is to say once the row is on
 *         its way out of frame but still visibly in it - measured, about
 *         60% of the row is still on screen at that moment, which is what
 *         makes the gathering-up something you watch rather than something
 *         that has silently already happened. Off the top and off the
 *         bottom both count.
 *
 * The gap between the two bands is the hysteresis and it is generous on
 * purpose: everywhere a reader would actually stop to read the cards sits
 * inside it, so the deck holds open there and only re-stacks once they
 * have committed to scrolling away.
 */ const OPEN_BAND = "-40% 0px -40% 0px";
const HOLD_BAND = "-20% 0px -20% 0px";
const OPEN_MS = 0.75;
const SHUT_MS = 0.5; // gathering up is a reset; it should not dawdle
const STEP = 0.07; // extra delay per step out from the middle card
const STAGGER = 0.08; // per-card fade delay when the stack is NOT running
const EASE = [
    0.16,
    1,
    0.3,
    1
]; // matches Reveal
/*
 * Deck shape, per step out from the middle card.
 *
 * SPLAY is doing most of the work and is the one that is easy to leave
 * out. Five identical cards stacked on a shared centre and rotated are
 * still five identical cards on a shared centre: the top one covers the
 * others almost completely and only the corners escape. Tuned against the
 * LIGHT theme, where a card and the section behind it sit at nearly the
 * same value and a peeking edge is close to invisible - dark has far more
 * separation to spare and reads fine at these numbers too.
 */ const SPLAY = 22; // px sideways, in the direction the card will travel
const TILT = 8; // deg
const DIP = 0.05; // scale
const DROP = 14; // px below the top card
const blank = ()=>({
        el: null,
        dx: 0,
        dy: 0,
        rot: 0,
        sc: 1,
        z: 0,
        t: 1,
        to: 1,
        run: null
    });
// useLayoutEffect warns when a client component is server-rendered; the
// measurement genuinely has to happen before paint, so swap the hook rather
// than the timing.
const useIsoLayoutEffect = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"] : "TURBOPACK unreachable";
function CardStack({ className, children }) {
    const count = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(children);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Set up by the layout effect below, which owns the geometry; the
    // in-view effect only says which way to go.
    const driver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [armed, setArmed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const midScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(gridRef, {
        margin: OPEN_BAND
    });
    const inFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(gridRef, {
        margin: HOLD_BAND
    });
    const cell = (i)=>cells.current[i] ??= blank();
    useIsoLayoutEffect(()=>{
        const grid = gridRef.current;
        if (!grid) return;
        const mid = (count - 1) / 2;
        /* Interpolate the whole deck from one scalar. At rest in the open
       state the transform is dropped entirely rather than written as an
       identity, which keeps the finished DOM clean. */ const paint = (c)=>{
            if (!c.el) return;
            const k = 1 - c.t;
            const flat = k < 0.001;
            c.el.style.transform = flat ? "" : `translateX(${(c.dx * k).toFixed(2)}px) translateY(${(c.dy * k).toFixed(2)}px)` + ` scale(${(1 - (1 - c.sc) * k).toFixed(4)}) rotate(${(c.rot * k).toFixed(2)}deg)`;
            /* Deck order only means anything while the cards overlap. Held past
         that it outlives its purpose and starts costing something: the
         card hover paints a 40px-blur shadow well into its neighbours'
         boxes, and a card left on a lower layer has that shadow drawn
         UNDER them. Cleared with the transform, restored with it. */ c.el.style.zIndex = flat ? "" : String(c.z);
        };
        const off = ()=>{
            for (const c of cells.current){
                if (!c) continue;
                c.run?.stop();
                c.run = null;
                c.t = c.to = 1;
                c.dx = c.dy = c.rot = 0;
                c.sc = 1;
                if (c.el) {
                    c.el.style.transform = "";
                    c.el.style.zIndex = "";
                    c.el.style.willChange = "";
                }
            }
            return false;
        };
        const place = ()=>{
            if (!window.matchMedia(SPREAD_AT).matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                return off();
            }
            /*
       * Measure from identity. getBoundingClientRect reports the
       * TRANSFORMED box, so on a resize mid-deck the cards are already
       * displaced and reading them where they sit would compound the
       * offset every time. Clearing first costs one extra layout pass on
       * mount and on resize, and nothing at all per frame.
       *
       * Rects rather than offsetLeft: offsetLeft is relative to whatever
       * the offsetParent happens to be, which would make this component
       * silently depend on its caller having set `position: relative`.
       */ for (const c of cells.current)if (c?.el) c.el.style.transform = "";
            const box = grid.getBoundingClientRect();
            const line = box.left + box.width / 2;
            cells.current.forEach((c, i)=>{
                if (!c?.el) return;
                const r = c.el.getBoundingClientRect();
                const step = i - mid;
                const away = Math.abs(step);
                c.dx = line - (r.left + r.width / 2) + step * SPLAY;
                c.dy = away * DROP;
                c.rot = step * TILT;
                c.sc = 1 - away * DIP;
                // Grid items honour z-index without being positioned, so the
                // middle card can be the top of the deck with no stacking context.
                // paint() is what actually writes it - see the note there.
                c.z = count - away;
                /* Promoted for as long as the stack is live, not just while a
           given pop runs. These transforms are written from JS, so the
           compositor never adopts them on its own the way it would a CSS
           or WAAPI animation - without this every frame repaints five
           cards of text on the main thread. Promoting and demoting around
           each pass would rebuild the layers on every scroll through the
           section, which costs more than holding five card-sized layers
           on a desktop-only breakpoint. */ c.el.style.willChange = "transform";
                paint(c);
            });
            return true;
        };
        const on = place();
        if (on) {
            // First paint is the closed deck. Deliberately not conditioned on
            // whether the row is already in view: if it is, the observer fires a
            // moment later and the pop simply plays at once, which is the right
            // thing to see when a reader lands mid-page.
            for (const c of cells.current){
                if (!c) continue;
                c.t = c.to = 0;
                paint(c);
            }
            open.current = false;
        }
        setArmed(on);
        // A resize moves the columns, so the offsets that put each card on the
        // centre line move with them. place() rewrites them and repaints at
        // whatever t the deck is currently sitting at, open, shut or mid-flight.
        const ro = new ResizeObserver(()=>setArmed(place()));
        ro.observe(grid);
        // paint lives in this closure, so the animation effect below drives the
        // cards through it rather than duplicating the maths.
        driver.current = (i, to)=>{
            const c = cells.current[i];
            if (!c?.el || c.to === to) return;
            c.to = to;
            c.run?.stop();
            const away = Math.abs(i - mid);
            c.run = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(c.t, to, {
                duration: to === 1 ? OPEN_MS : SHUT_MS,
                // Opening, the pair nearest the middle leaves first and the outer
                // pair chases it. Closing runs the other way, so the far cards
                // come home first - it reads as a hand gathering them up.
                delay: (to === 1 ? away : mid - away) * STEP,
                ease: EASE,
                onUpdate: (v)=>{
                    c.t = v;
                    paint(c);
                }
            });
        };
        return ()=>{
            ro.disconnect();
            driver.current = null;
            off();
        };
    }, [
        count
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!armed || !driver.current) return;
        // Between the two bands the deck holds whatever state it is in; that
        // gap is where a reader sits while actually reading the cards.
        if (midScreen) open.current = true;
        else if (!inFrame) open.current = false;
        const to = open.current ? 1 : 0;
        for(let i = 0; i < count; i++)driver.current(i, to);
    }, [
        armed,
        midScreen,
        inFrame,
        count
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: gridRef,
        className: className,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map(children, (child, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: (el)=>{
                    cell(i).el = el;
                },
                className: "h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    className: "h-full",
                    delay: armed ? 0 : i * STAGGER,
                    children: child
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/CardStack.tsx",
                    lineNumber: 320,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CardStack.tsx",
                lineNumber: 310,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/CardStack.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Container.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Container({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mx-auto w-full max-w-[1440px] px-6 lg:px-10", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Container.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ui/Eyebrow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eyebrow",
    ()=>Eyebrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Eyebrow({ children, className }) {
    // text-eyebrow is deliberately OUTSIDE cn()'s merge scope - see the
    // tailwind-merge warning in tokens.css. Passed through cn(), tailwind-
    // merge does not know text-eyebrow is a custom font-size token, treats
    // it as a text-COLOR utility (its fallback for any unrecognized
    // text-{word}), sees it "conflicting" with text-ink-muted, and silently
    // drops one of them - which is exactly what was happening here.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `text-eyebrow ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-ink-muted uppercase", className)}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Eyebrow.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ui/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function Reveal({ children, delay = 0, className }) {
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0,
            y: reduce ? 0 : 24
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-80px"
        },
        transition: {
            duration: reduce ? 0.01 : 0.7,
            delay: reduce ? 0 : delay,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Reveal.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Section({ children, className, id, as: Tag = "section" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        id: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("py-[clamp(64px,8vw,128px)]", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Section.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-theme.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$liquid$2d$reveal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/liquid-reveal.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/*
 * WHY THE VIEW TRANSITIONS API AND NOT AN OVERLAY DIV.
 *
 * The naive version is a full-screen element painted in the incoming
 * theme colour that grows over the page. It always looks wrong, because
 * it is a flat colour: the moment it covers anything, that content
 * vanishes, and the swap at the end pops the text back in.
 *
 * startViewTransition snapshots the real OLD and NEW renderings of the
 * page as images and stacks them. Clipping the NEW snapshot means the
 * blob reveals the genuinely re-themed page - text, images, the lot -
 * spreading over the old one. Nothing disappears at any point.
 *
 * Support is Chrome/Edge/Safari; Firefox has not shipped it. There the
 * theme still switches, with the short colour crossfade below instead of
 * the spread. Same for prefers-reduced-motion, where an expanding
 * full-viewport shape is exactly what the setting exists to suppress.
 */ // document.startViewTransition and ViewTransition are already in lib.dom -
// do not re-declare them here, the local shape will not match and tsc
// rejects it (TS2717 / TS2687).
const CROSSFADE_MS = 380;
function ThemeToggle({ className }) {
    const { theme, applyTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const btnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // theme is null until mounted (see use-theme.ts) - render the neutral
    // state so the server and the client agree.
    const next = theme === "dark" ? "light" : "dark";
    const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
    function crossfade() {
        document.documentElement.classList.add("theme-crossfade");
        window.setTimeout(()=>document.documentElement.classList.remove("theme-crossfade"), CROSSFADE_MS);
    }
    async function onClick() {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!document.startViewTransition || reduce) {
            if (!reduce) crossfade();
            applyTheme(next);
            return;
        }
        // The LARGEST of the three viewport measures, not innerWidth alone.
        // They disagree in ordinary situations - clientWidth excludes a classic
        // scrollbar, visualViewport shrinks under pinch-zoom or a soft keyboard
        // - and the blob is sized against a snapshot box that may match any of
        // them. Taking the max can only ever over-cover, and over-covering is
        // invisible (the blob is off-screen by then) while under-covering
        // leaves a strip of the old theme sitting on an edge. See EDGE_SLACK in
        // liquid-reveal.ts for the rest of that argument.
        const de = document.documentElement;
        const vv = window.visualViewport;
        const w = Math.max(window.innerWidth, de.clientWidth, vv?.width ?? 0);
        const h = Math.max(window.innerHeight, de.clientHeight, vv?.height ?? 0);
        const rect = btnRef.current?.getBoundingClientRect();
        const x = rect ? rect.left + rect.width / 2 : w / 2;
        const y = rect ? rect.top + rect.height / 2 : 0;
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$liquid$2d$reveal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["coverRadius"])(x, y, w, h);
        const transition = document.startViewTransition(()=>applyTheme(next));
        try {
            await transition.ready;
        } catch  {
            return; // a second toggle interrupted this one
        }
        document.documentElement.animate({
            clipPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$liquid$2d$reveal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["liquidFrames"])(x, y, r)
        }, {
            duration: 900,
            easing: "linear",
            pseudoElement: "::view-transition-new(root)"
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: btnRef,
        type: "button",
        onClick: onClick,
        "aria-label": label,
        title: label,
        className: `inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-[var(--dur-fast)] hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink ${className ?? ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                size: 19,
                "aria-hidden": "true",
                className: "hidden dark:block"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ThemeToggle.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                size: 19,
                "aria-hidden": "true",
                className: "dark:hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ThemeToggle.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/ThemeToggle.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/data/petals.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MARK_VIEWBOX",
    ()=>MARK_VIEWBOX,
    "PETALS",
    ()=>PETALS,
    "STEP",
    ()=>STEP
]);
const MARK_VIEWBOX = "-56 -21 1727 1645";
const PETALS = [
    {
        id: "corporate",
        color: "var(--color-petal-corporate)",
        authored: "#159cbc",
        body: "M659.58,394.82s53.93-57.62,196.39-258.33c100.58-145.35,180.91-99.2,180.91-99.2,0,0,76.2,37.81,6.12,193.01-85.52,195.4-252.89,376.57-350.22,409.47-97.33,32.91-176.01-72.94-209.14-118.9-33.13-45.96-93.62-186.44-97.25-311.41-.62-71.27,64.97-56.88,124.89,14.41,48.31,57.47,149.74,175.51,148.29,170.94Z",
        head: {
            cx: 667.46,
            cy: 97.71,
            rx: 80.36,
            ry: 97.72,
            transform: "translate(-1.54 11.17) rotate(-.96)"
        }
    },
    {
        id: "content",
        color: "var(--color-petal-content)",
        authored: "#fcd088",
        body: "M1182.65,558.78s72.95,30.12,311.02,92.58c171.5,42.81,156.66,134.26,156.66,134.26,0,0-8.48,84.64-178.43,73.85-213.01-11.05-441.59-103.71-506.73-183.16-65.14-79.45,6.12-190.43,37.43-237.65,31.31-47.21,141.4-153.4,257.04-200.9,66.47-25.74,76.15,40.71,30.59,121.94-36.72,65.48-111.36,202.05-107.6,199.08Z",
        head: {
            cx: 1463.5,
            cy: 479.93,
            rx: 80.36,
            ry: 97.72,
            transform: "translate(746.8064 1843.1958) rotate(-80.4244)"
        }
    },
    {
        id: "activation",
        color: "var(--color-petal-activation)",
        authored: "#e8262d",
        body: "M1186.12,1086.94s-8.96,78.41-3.71,324.49c5.88,176.66-86.13,187.48-86.13,187.48,0,0-83.72,15.06-119.96-151.32-47.8-207.87-21.4-453.1,37.13-537.54,58.53-84.44,184.81-46.35,238.8-29.19,53.99,17.16,186.3,93.9,263.71,192.07,42.98,56.86-18.26,84.4-108.87,62.87-73.05-17.35-224.85-51.67-220.96-48.86Z",
        head: {
            cx: 1338.99,
            cy: 1335.38,
            rx: 80.36,
            ry: 97.72,
            transform: "translate(-139.39 156.17) rotate(-6.35)"
        }
    },
    {
        id: "live",
        color: "var(--color-petal-live)",
        authored: "#46b052",
        body: "M682.03,1268.19s-77.41,15.38-310.17,95.4c-166.46,59.46-204.82-24.87-204.82-24.87,0,0-39.87-75.14,107.55-160.39,183.4-108.9,425-158.52,523.26-128.52,98.26,30,100.49,161.88,100.61,218.53.12,56.65-32.63,206.06-102.53,309.71-41.04,58.27-85.94,8.34-93.07-84.52-5.74-74.86-19.35-229.89-20.83-225.34Z",
        head: {
            cx: 492.03,
            cy: 1489.52,
            // Note the swapped radii - this one is authored rotated in the source.
            rx: 97.72,
            ry: 80.36,
            transform: "translate(-565.26 330.68) rotate(-24.1)"
        }
    },
    {
        id: "weddings",
        color: "var(--color-petal-weddings)",
        authored: "#834e9b",
        body: "M354.81,843.31s-36.98-69.72-180.54-269.65c-104.81-142.33-35.06-203.32-35.06-203.32,0,0,60.51-59.79,184.54,56.89,157.03,144.34,274.02,361.48,273.53,464.22-.49,102.74-126.15,142.78-180.38,159.19-54.22,16.4-206.74,27.99-326.11-9.16-67.61-22.56-32.7-79.92,54.19-113.44,70.05-27.02,214.63-84.62,209.83-84.74Z",
        head: {
            cx: 88.19,
            cy: 724.96,
            rx: 80.36,
            ry: 97.72,
            transform: "translate(-452.31 233.84) rotate(-40.8)"
        }
    }
];
const STEP = 360 / PETALS.length;
}),
"[project]/src/lib/data/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SERVICES",
    ()=>SERVICES
]);
const SERVICES = [
    // Brand Activation (5)
    {
        slug: "experiential-marketing",
        name: "Experiential Marketing",
        pillar: "activation",
        legacyUrl: "marketing.php"
    },
    {
        slug: "btl-promotions-activations",
        name: "BTL Promotions & Activations",
        pillar: "activation",
        legacyUrl: "promotions-activations.php"
    },
    {
        slug: "brand-launches",
        name: "Brand Launches",
        pillar: "activation",
        legacyUrl: "brand-launches.php"
    },
    {
        slug: "audience-acquisition",
        name: "Audience Acquisition",
        pillar: "activation",
        legacyUrl: "audience-acquisition.php"
    },
    {
        slug: "merchandising",
        name: "Merchandising",
        pillar: "activation",
        legacyUrl: "merchandising.php"
    },
    // Corporate & MICE (4)
    {
        slug: "corporate-events",
        name: "Corporate Events",
        pillar: "corporate",
        legacyUrl: "corporate-events.php"
    },
    {
        slug: "mice-and-logistics",
        name: "MICE and Logistics",
        pillar: "corporate",
        legacyUrl: "logistics.php"
    },
    {
        slug: "exhibition",
        name: "Exhibition",
        pillar: "corporate",
        legacyUrl: "exhibition.php"
    },
    {
        slug: "award-functions",
        name: "Award Functions",
        pillar: "corporate",
        legacyUrl: "award-fuctions.php"
    },
    // Live & Entertainment (4)
    {
        slug: "live-concerts",
        name: "Live Concerts",
        pillar: "live",
        legacyUrl: "live-concerts.php"
    },
    {
        slug: "artist-management",
        name: "Artist Management",
        pillar: "live",
        legacyUrl: "artist-management.php"
    },
    {
        slug: "televised-shows",
        name: "Televised Shows",
        pillar: "live",
        legacyUrl: "televised.php"
    },
    {
        slug: "sports-events",
        name: "Sports Events",
        pillar: "live",
        legacyUrl: "sports-events.php"
    },
    // Content & Digital (2)
    {
        slug: "digital-marketing",
        name: "Digital Marketing",
        pillar: "content",
        legacyUrl: "digital-marketing.php"
    },
    {
        slug: "video-production",
        name: "Video Production & Content Creation",
        pillar: "content",
        legacyUrl: "video-production.php"
    },
    // Weddings & Social (1)
    {
        slug: "wedding-management",
        name: "Wedding Management",
        pillar: "weddings",
        legacyUrl: "wedding-management.php"
    }
];
}),
"[project]/src/lib/data/stats.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STATS",
    ()=>STATS
]);
const STATS = [
    {
        value: null,
        suffix: "+",
        label: "Events delivered"
    },
    {
        value: null,
        suffix: "+",
        label: "Cities"
    },
    {
        value: null,
        suffix: "",
        label: "Years in business"
    },
    {
        value: null,
        suffix: "+",
        label: "Brands served"
    }
];
}),
"[project]/src/lib/liquid-reveal.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "coverRadius",
    ()=>coverRadius,
    "liquidFrames",
    ()=>liquidFrames
]);
/*
 * The liquid spread.
 *
 * A blob grows from the point you clicked until it covers the viewport.
 * It is not a circle: each frame samples N points around the centre and
 * pushes each one in or out by two summed sine waves, then joins them
 * with cubic Beziers. The wave phase advances frame to frame, so the
 * edge rolls as it expands rather than just scaling - that is what reads
 * as liquid rather than as a wipe. The wobble amplitude decays toward 0
 * so it settles into a clean circle instead of ending mid-ripple.
 *
 * WHY EVERY FRAME HAS THE SAME COMMAND COUNT: CSS can only interpolate
 * between two path() values when their command lists match exactly in
 * length and type. Generate them any other way (varying N, mixing arcs)
 * and the browser silently falls back to a discrete jump at the midpoint.
 *
 * WHY THE RADIUS IS PRE-EASED HERE: the frames are handed to WAAPI with
 * easing "linear". A timing function in the options object is applied
 * BETWEEN EACH KEYFRAME PAIR, not once across the whole run, so with 15
 * keyframes an ease-out would produce fifteen little ease-outs. Baking
 * the ease into the radius keeps the motion a single decelerating spread.
 */ const SAMPLES = 14;
function blobPath(cx, cy, r, phase, amp) {
    const pts = [];
    for(let i = 0; i < SAMPLES; i++){
        const theta = i / SAMPLES * Math.PI * 2;
        const wobble = Math.sin(3 * theta + phase) * 0.6 + Math.sin(5 * theta - phase * 1.3) * 0.4;
        const rr = r * (1 + amp * wobble);
        pts.push([
            cx + rr * Math.cos(theta),
            cy + rr * Math.sin(theta)
        ]);
    }
    // Closed Catmull-Rom through the samples, expressed as cubic Beziers.
    const f = (n)=>n.toFixed(1);
    let d = `M ${f(pts[0][0])} ${f(pts[0][1])}`;
    for(let i = 0; i < SAMPLES; i++){
        const p0 = pts[(i - 1 + SAMPLES) % SAMPLES];
        const p1 = pts[i];
        const p2 = pts[(i + 1) % SAMPLES];
        const p3 = pts[(i + 2) % SAMPLES];
        const c1x = p1[0] + (p2[0] - p0[0]) / 6;
        const c1y = p1[1] + (p2[1] - p0[1]) / 6;
        const c2x = p2[0] - (p3[0] - p1[0]) / 6;
        const c2y = p2[1] - (p3[1] - p1[1]) / 6;
        d += ` C ${f(c1x)} ${f(c1y)}, ${f(c2x)} ${f(c2y)}, ${f(p2[0])} ${f(p2[1])}`;
    }
    return `${d} Z`;
}
/*
 * Slack added to the cover radius, in px, on top of the corner distance.
 *
 * The blob is positioned with getBoundingClientRect / window.innerWidth,
 * i.e. the JS viewport - but it is CLIPPING ::view-transition-new(root),
 * whose coordinate space is the snapshot containing block. Those are the
 * same box in every engine tested here (Chromium and WebKit, verified),
 * yet the spec lets the snapshot block differ from the JS viewport by
 * browser UI insets, and a reported case had the right edge re-theming
 * visibly after everything else - which is what an OFFSET between the two
 * looks like. Not a too-small radius: the toggle sits near the right edge,
 * so that edge is the CLOSEST one and cannot be the last to fill unless
 * the whole blob is shifted away from it.
 *
 * A flat pixel margin rather than a bigger multiplier, because the two do
 * very different things to the timing. The radius is pre-eased with
 * ease-out-expo, so scaling it up moves the moment of full cover sharply
 * earlier: 1.06 -> 1.35 would cover the viewport by t=0.19 of a 900ms run
 * and leave three quarters of the animation as dead time. +72px on a
 * ~1478px radius is under 5%, absorbing an inset far larger than any
 * plausible one while barely touching how the spread reads.
 */ const EDGE_SLACK = 72;
function coverRadius(x, y, w, h) {
    return Math.hypot(Math.max(x, w - x), Math.max(y, h - y)) + EDGE_SLACK;
}
function liquidFrames(x, y, maxR, steps = 15) {
    const frames = [];
    for(let i = 0; i <= steps; i++){
        const t = i / steps;
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // ease-out-expo
        // Overshoot the cover radius slightly so the wobble never exposes a
        // corner on the final frame.
        const r = maxR * 1.06 * eased;
        const amp = 0.17 * (1 - eased) + 0.012;
        frames.push(`path("${blobPath(x, y, r, t * Math.PI * 1.7, amp)}")`);
    }
    return frames;
}
}),
"[project]/src/lib/use-dropdown.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDropdown",
    ()=>useDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useDropdown() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const openTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clearTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (openTimer.current) clearTimeout(openTimer.current);
        if (closeTimer.current) clearTimeout(closeTimer.current);
    }, []);
    const openNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        clearTimers();
        setOpen(true);
    }, [
        clearTimers
    ]);
    const closeNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        clearTimers();
        setOpen(false);
    }, [
        clearTimers
    ]);
    const openWithDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        clearTimers();
        openTimer.current = setTimeout(()=>setOpen(true), 150);
    }, [
        clearTimers
    ]);
    const closeWithDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        clearTimers();
        closeTimer.current = setTimeout(()=>setOpen(false), 300);
    }, [
        clearTimers
    ]);
    const rootProps = {
        onMouseEnter: openWithDelay,
        onMouseLeave: closeWithDelay,
        onBlur: (e)=>{
            if (!e.currentTarget.contains(e.relatedTarget)) closeNow();
        },
        onKeyDown: (e)=>{
            if (e.key === "Escape") closeNow();
        }
    };
    const triggerProps = {
        onFocus: openNow,
        onClick: ()=>open ? closeNow() : openNow(),
        "aria-expanded": open,
        "aria-haspopup": true
    };
    return {
        open,
        rootProps,
        triggerProps,
        openNow,
        closeNow
    };
}
}),
"[project]/src/lib/use-in-view-once.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInViewOnce",
    ()=>useInViewOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useInViewOnce(margin = "0px") {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ref.current || inView) return;
        const io = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) setInView(true);
        }, {
            rootMargin: margin
        });
        io.observe(ref.current);
        return ()=>io.disconnect();
    }, [
        margin,
        inView
    ]);
    return {
        ref,
        inView
    };
}
}),
"[project]/src/lib/use-motion-styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMotionStyles",
    ()=>useMotionStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useMotionStyles(ref, styles) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const unsubscribe = Object.entries(styles).map(([prop, value])=>{
            const write = (v)=>el.style.setProperty(prop, String(v));
            write(value.get());
            return value.on("change", write);
        });
        return ()=>unsubscribe.forEach((u)=>u());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
}),
"[project]/src/lib/use-theme.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "THEME_STORAGE_KEY",
    ()=>THEME_STORAGE_KEY,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const THEME_STORAGE_KEY = "assertive-theme";
function useTheme() {
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const read = ()=>setThemeState(document.documentElement.dataset.theme ?? "light");
        read();
        // Follow the OS only while the visitor has not made a choice.
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const onChange = ()=>{
            try {
                if (localStorage.getItem(THEME_STORAGE_KEY)) return;
            } catch  {
            /* storage blocked - fall through and follow the OS */ }
            document.documentElement.dataset.theme = mq.matches ? "dark" : "light";
            read();
        };
        mq.addEventListener("change", onChange);
        return ()=>mq.removeEventListener("change", onChange);
    }, []);
    const applyTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((next)=>{
        document.documentElement.dataset.theme = next;
        setThemeState(next);
        try {
            localStorage.setItem(THEME_STORAGE_KEY, next);
        } catch  {
        /* private mode - the theme still applies for this session */ }
    }, []);
    return {
        theme,
        applyTheme
    };
}
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
];

//# sourceMappingURL=src_13wsr_6._.js.map