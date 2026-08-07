(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/brand/PinwheelMark.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PinwheelMark",
    ()=>PinwheelMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/petals.ts [app-client] (ecmascript)");
"use client";
;
;
;
function PinwheelMark({ rotation = 0, filled = [], // Derived from the ink token so the outline follows the theme without
// the caller having to know which theme is active.
hollowColor = "color-mix(in oklab, var(--color-ink) 30%, transparent)", strokeWidth = 9, className, duration = 0.9 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARK_VIEWBOX"],
        className: className,
        "aria-hidden": "true",
        overflow: "visible",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].g, {
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
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PETALS"].map((petal)=>{
                const isFilled = filled.includes(petal.id);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].g, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: petal.body,
                                    fill: petal.color
                                }, void 0, false, {
                                    fileName: "[project]/src/components/brand/PinwheelMark.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
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
_c = PinwheelMark;
var _c;
__turbopack_context__.k.register(_c, "PinwheelMark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Eyebrow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MegaMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/MegaMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pillars.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-dropdown.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const active = pathname === href;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "text-base relative inline-block py-2 font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
        children: [
            children,
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(NavLink, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavLink;
function SimpleDropdown({ label, links }) {
    _s1();
    const { open, rootProps, triggerProps, closeNow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropdown"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ...rootProps,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-base inline-flex items-center gap-1 font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                ...triggerProps,
                children: [
                    label,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 16,
                        "aria-hidden": "true",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-transform duration-[var(--dur-fast)]", open && "rotate-180")
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
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-lg border border-hairline bg-surface-raised p-3 shadow-bar",
                children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s1(SimpleDropdown, "fqCqffjkqnghv6Wf3SsifJHaz44=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropdown"]
    ];
});
_c1 = SimpleDropdown;
function Header() {
    _s2();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hamburgerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const onScroll = {
                "Header.useEffect.onScroll": ()=>setScrolled(window.scrollY > 40)
            }["Header.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    // Keeps --header-h (tokens.css) equal to this header's TRUE rendered
    // height at all times, including mid-transition as it shrinks from
    // 110px to 84px on scroll. HeroSequence's pinned stage reads this
    // variable to reserve exactly this much space and never sit under it.
    // A ResizeObserver rather than recomputing on the scroll/resize events
    // this component already listens to, so the reservation tracks the
    // header's own 420ms height transition smoothly instead of jumping.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const el = headerRef.current;
            if (!el) return;
            const sync = {
                "Header.useEffect.sync": ()=>{
                    document.documentElement.style.setProperty("--header-h", `${el.getBoundingClientRect().height}px`);
                }
            }["Header.useEffect.sync"];
            sync();
            const ro = new ResizeObserver(sync);
            ro.observe(el);
            return ({
                "Header.useEffect": ()=>ro.disconnect()
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    // Lock background scroll while the mobile panel is open.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!mobileOpen) return;
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return ({
                "Header.useEffect": ()=>{
                    document.body.style.overflow = prev;
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        mobileOpen
    ]);
    // Focus trap + Escape-to-close for the mobile panel (PLAN.md section 3A).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!mobileOpen) return;
            const panel = panelRef.current;
            if (!panel) return;
            const focusables = {
                "Header.useEffect.focusables": ()=>Array.from(panel.querySelectorAll('a[href], button:not([disabled])'))
            }["Header.useEffect.focusables"];
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
            return ({
                "Header.useEffect": ()=>document.removeEventListener("keydown", onKeyDown)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        mobileOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: headerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("sticky top-0 z-50 h-[72px] border-b border-hairline bg-surface transition-[height,box-shadow] duration-[var(--dur-base)] lg:h-[110px]", scrolled && "lg:h-[84px] lg:shadow-bar"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                className: "flex h-full items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-corporate-ink",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex flex-col leading-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-ink lg:text-xl",
                                        children: "Assertive"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-8 lg:flex",
                        "aria-label": "Primary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                href: "/",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                href: "/about",
                                children: "About Us"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MegaMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MegaMenu"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleDropdown, {
                                label: "Clients",
                                links: CLIENTS_LINKS
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleDropdown, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {
                                className: "h-10 w-10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: hamburgerRef,
                        type: "button",
                        className: "inline-flex h-10 w-10 items-center justify-center rounded-md text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink lg:hidden",
                        "aria-expanded": mobileOpen,
                        "aria-label": mobileOpen ? "Close menu" : "Open menu",
                        onClick: ()=>setMobileOpen((v)=>!v),
                        children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 24,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 206,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                        className: "flex flex-col gap-8 py-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        onClick: ()=>setMobileOpen(false),
                                        className: "text-h3 text-ink",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PILLARS"].map((pillar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm mb-2 font-semibold", pillar.ink),
                                                    children: pillar.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "flex flex-col gap-2",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES"].filter((s)=>s.pillar === pillar.id).map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                        children: "Clients"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this),
                                    CLIENTS_LINKS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 265,
                                        columnNumber: 17
                                    }, this),
                                    CONTACT_LINKS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
_s2(Header, "3W1gZT9WBasZDp/0jzoy+fIkCMI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c2 = Header;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NavLink");
__turbopack_context__.k.register(_c1, "SimpleDropdown");
__turbopack_context__.k.register(_c2, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/MegaMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MegaMenu",
    ()=>MegaMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pillars.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-dropdown.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function MegaMenu() {
    _s();
    const { open, rootProps, triggerProps, closeNow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropdown"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ...rootProps,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-base inline-flex items-center gap-1 font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                ...triggerProps,
                children: [
                    "Services",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 16,
                        "aria-hidden": "true",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-transform duration-[var(--dur-fast)]", open && "rotate-180")
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
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-full z-50 mt-3 w-[min(90vw,880px)] -translate-x-1/2 rounded-lg border border-hairline bg-surface-raised p-8 shadow-bar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-5 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PILLARS"].map((pillar)=>{
                        const services = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES"].filter((s)=>s.pillar === pillar.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-3 h-[3px] w-8", pillar.mark)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/MegaMenu.tsx",
                                    lineNumber: 38,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm mb-3 font-semibold", pillar.ink),
                                    children: pillar.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/MegaMenu.tsx",
                                    lineNumber: 39,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/services/${service.slug}`,
                                                className: `text-small ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hover:underline", pillar.ink)}`,
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
_s(MegaMenu, "fqCqffjkqnghv6Wf3SsifJHaz44=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropdown"]
    ];
});
_c = MegaMenu;
var _c;
__turbopack_context__.k.register(_c, "MegaMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/services/ServiceHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceHero",
    ()=>ServiceHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Eyebrow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$PinwheelMark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand/PinwheelMark.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function ServiceHero({ service, pillar }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        as: "section",
        className: "overflow-hidden bg-surface",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            className: "flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:max-w-[480px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                    className: pillar.ink,
                                    children: pillar.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/services/ServiceHero.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-display mt-4 text-ink",
                                    children: service.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/services/ServiceHero.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/services/ServiceHero.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 0.08,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-body-lg mt-6 max-w-[46ch] text-ink-body",
                                children: service.blurb
                            }, void 0, false, {
                                fileName: "[project]/src/components/services/ServiceHero.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/services/ServiceHero.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 0.16,
                            className: "mt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                href: "/#enquiry",
                                variant: "primary",
                                children: "Enquire About This Service"
                            }, void 0, false, {
                                fileName: "[project]/src/components/services/ServiceHero.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/services/ServiceHero.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/services/ServiceHero.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.1,
                    className: "w-full max-w-[320px] shrink-0 lg:max-w-[420px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroArt, {
                        pillar: pillar
                    }, void 0, false, {
                        fileName: "[project]/src/components/services/ServiceHero.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/services/ServiceHero.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/services/ServiceHero.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/services/ServiceHero.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = ServiceHero;
/*
 * JUST THE MARK - no photo in this component. The photo lives beside the
 * description paragraph further down the page instead (see page.tsx and
 * imageFor() in services.ts): the hero pairs the title with the brand
 * mark, the description pairs the copy with a real photograph, and the
 * two do not share a box. An earlier version inset a photo into the mark
 * here and it did not read as intentional - two different pictures of
 * the same thing competing for one frame - so the pairing was split
 * across the two sections instead of layered into one.
 */ function HeroArt({ pillar }) {
    _s();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    // Petal starts hollow and blooms into colour a beat after mount - see
    // the effect below. Starting bloomed would be indistinguishable from a
    // static image; starting hollow and filling in is what makes this read
    // as a deliberate reveal rather than an image that failed to load.
    const [bloom, setBloom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroArt.useEffect": ()=>{
            // 0ms for reduced motion rather than an early setBloom(true) in the
            // effect body itself - still fires on the next tick instead of
            // synchronously mid-effect, which is what react-hooks/set-state-in-
            // effect actually objects to (a same-pass render cascade before
            // paint), and PinwheelMark's own duration prop below is already what
            // makes the fade instant for these users, not the timing here.
            const t = setTimeout({
                "HeroArt.useEffect.t": ()=>setBloom(true)
            }["HeroArt.useEffect.t"], reduce ? 0 : 200);
            return ({
                "HeroArt.useEffect": ()=>clearTimeout(t)
            })["HeroArt.useEffect"];
        }
    }["HeroArt.useEffect"], [
        reduce
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative aspect-square w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: `absolute inset-[8%] rounded-full opacity-70 blur-3xl ${pillar.wash}`
            }, void 0, false, {
                fileName: "[project]/src/components/services/ServiceHero.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                className: "relative h-full w-full",
                animate: reduce ? undefined : {
                    rotate: 360
                },
                transition: reduce ? undefined : {
                    duration: 140,
                    ease: "linear",
                    repeat: Infinity
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$PinwheelMark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinwheelMark"], {
                    filled: bloom ? [
                        pillar.id
                    ] : [],
                    duration: reduce ? 0.01 : 1.1,
                    strokeWidth: 7,
                    className: "h-full w-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/services/ServiceHero.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/services/ServiceHero.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/services/ServiceHero.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(HeroArt, "SkQ3mtJz8BnqUSpuRFxyUy+zegc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = HeroArt;
var _c, _c1;
__turbopack_context__.k.register(_c, "ServiceHero");
__turbopack_context__.k.register(_c1, "HeroArt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(base, variants[variant], className);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            variant === "secondary" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative",
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            variant === "primary" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: classes,
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Container({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto w-full max-w-[1440px] px-6 lg:px-10", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Container.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c = Container;
var _c;
__turbopack_context__.k.register(_c, "Container");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Eyebrow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eyebrow",
    ()=>Eyebrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Eyebrow({ children, className }) {
    // text-eyebrow is deliberately OUTSIDE cn()'s merge scope - see the
    // tailwind-merge warning in tokens.css. Passed through cn(), tailwind-
    // merge does not know text-eyebrow is a custom font-size token, treats
    // it as a text-COLOR utility (its fallback for any unrecognized
    // text-{word}), sees it "conflicting" with text-ink-muted, and silently
    // drops one of them - which is exactly what was happening here.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `text-eyebrow ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-ink-muted uppercase", className)}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Eyebrow.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c = Eyebrow;
var _c;
__turbopack_context__.k.register(_c, "Eyebrow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Reveal({ children, delay = 0, className }) {
    _s();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
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
_s(Reveal, "VqoxUmuj54Zl2QZdC/zIZVdX+nY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Section({ children, className, id, as: Tag = "section" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        id: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-[clamp(64px,8vw,128px)]", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Section.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = Section;
var _c;
__turbopack_context__.k.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$liquid$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/liquid-reveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const { theme, applyTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const btnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$liquid$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverRadius"])(x, y, w, h);
        const transition = document.startViewTransition(()=>applyTheme(next));
        try {
            await transition.ready;
        } catch  {
            return; // a second toggle interrupted this one
        }
        document.documentElement.animate({
            clipPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$liquid$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liquidFrames"])(x, y, r)
        }, {
            duration: 900,
            easing: "linear",
            pseudoElement: "::view-transition-new(root)"
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: btnRef,
        type: "button",
        onClick: onClick,
        "aria-label": label,
        title: label,
        className: `inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-[var(--dur-fast)] hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink ${className ?? ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                size: 19,
                "aria-hidden": "true",
                className: "hidden dark:block"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ThemeToggle.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
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
_s(ThemeToggle, "UqOtBF5U/Z9514j6nKi++aq1gKY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/petals.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEMO_SERVICE_IMAGE",
    ()=>DEMO_SERVICE_IMAGE,
    "SERVICES",
    ()=>SERVICES,
    "imageFor",
    ()=>imageFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/work.ts [app-client] (ecmascript)");
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
    const samePillar = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORK"].find((w)=>w.pillar === service.pillar);
    if (samePillar) return {
        src: samePillar.image,
        alt: samePillar.alt
    };
    // No WORK entry in this pillar at all - borrow deterministically by
    // SLUG POSITION, not object identity. See the "matched on slug, not
    // identity" note on work.ts's own galleryFor: an RSC-boundary re-fetch
    // of `service` would break an indexOf(service) lookup here the same way.
    const i = Math.max(0, SERVICES.findIndex((s)=>s.slug === service.slug));
    const borrowed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORK"][i % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORK"].length];
    return {
        src: borrowed.image,
        alt: borrowed.alt
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/work.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/liquid-reveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/use-dropdown.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDropdown",
    ()=>useDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useDropdown() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clearTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdown.useCallback[clearTimers]": ()=>{
            if (openTimer.current) clearTimeout(openTimer.current);
            if (closeTimer.current) clearTimeout(closeTimer.current);
        }
    }["useDropdown.useCallback[clearTimers]"], []);
    const openNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdown.useCallback[openNow]": ()=>{
            clearTimers();
            setOpen(true);
        }
    }["useDropdown.useCallback[openNow]"], [
        clearTimers
    ]);
    const closeNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdown.useCallback[closeNow]": ()=>{
            clearTimers();
            setOpen(false);
        }
    }["useDropdown.useCallback[closeNow]"], [
        clearTimers
    ]);
    const openWithDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdown.useCallback[openWithDelay]": ()=>{
            clearTimers();
            openTimer.current = setTimeout({
                "useDropdown.useCallback[openWithDelay]": ()=>setOpen(true)
            }["useDropdown.useCallback[openWithDelay]"], 150);
        }
    }["useDropdown.useCallback[openWithDelay]"], [
        clearTimers
    ]);
    const closeWithDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdown.useCallback[closeWithDelay]": ()=>{
            clearTimers();
            closeTimer.current = setTimeout({
                "useDropdown.useCallback[closeWithDelay]": ()=>setOpen(false)
            }["useDropdown.useCallback[closeWithDelay]"], 300);
        }
    }["useDropdown.useCallback[closeWithDelay]"], [
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
_s(useDropdown, "z6TPrCuORc786y4H7uWqC7pDh94=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/use-theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "THEME_STORAGE_KEY",
    ()=>THEME_STORAGE_KEY,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const THEME_STORAGE_KEY = "assertive-theme";
function useTheme() {
    _s();
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            const read = {
                "useTheme.useEffect.read": ()=>setThemeState(document.documentElement.dataset.theme ?? "light")
            }["useTheme.useEffect.read"];
            read();
            // Follow the OS only while the visitor has not made a choice.
            const mq = window.matchMedia("(prefers-color-scheme: dark)");
            const onChange = {
                "useTheme.useEffect.onChange": ()=>{
                    try {
                        if (localStorage.getItem(THEME_STORAGE_KEY)) return;
                    } catch  {
                    /* storage blocked - fall through and follow the OS */ }
                    document.documentElement.dataset.theme = mq.matches ? "dark" : "light";
                    read();
                }
            }["useTheme.useEffect.onChange"];
            mq.addEventListener("change", onChange);
            return ({
                "useTheme.useEffect": ()=>mq.removeEventListener("change", onChange)
            })["useTheme.useEffect"];
        }
    }["useTheme.useEffect"], []);
    const applyTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTheme.useCallback[applyTheme]": (next)=>{
            document.documentElement.dataset.theme = next;
            setThemeState(next);
            try {
                localStorage.setItem(THEME_STORAGE_KEY, next);
            } catch  {
            /* private mode - the theme still applies for this session */ }
        }
    }["useTheme.useCallback[applyTheme]"], []);
    return {
        theme,
        applyTheme
    };
}
_s(useTheme, "j2OA5C8qh1pSLrYTJRrJZ6m8aXI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_11d1nbx._.js.map